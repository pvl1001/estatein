import { HttpResponse, http } from 'msw'
import { baseUrl } from 'shared/api/baseQuery.ts'
import { TestId } from 'shared/lib/const'
import {
    render,
    screen,
    server,
    userEvent,
    waitFor,
} from 'shared/lib/test-utils'
import { OrderForm } from './OrderForm.tsx'

async function fillForm() {
    const {
        getAllByRole,
        container,
        getByLabelText,
        findAllByPlaceholderText,
        getByRole,
    } = render(<OrderForm />)
    await findAllByPlaceholderText(/placeholder/)

    const user = userEvent.setup()
    const firstname = getByLabelText(/firstname/)
    const lastname = getByLabelText(/lastname/)
    const email = getByLabelText(/email/)
    const phone = getByLabelText(/phone/)
    const location = getByLabelText(/location/)
    const type = getByLabelText(/type/)
    const bathrooms = getByLabelText(/bathrooms/)
    const bedrooms = getByLabelText(/bedrooms/)
    const budget = getByLabelText(/budget/)
    const checkbox = getByRole('checkbox')
    const button = container.querySelector('[type="submit"]')!

    const fields = [
        firstname,
        lastname,
        email,
        phone,
        location,
        type,
        bathrooms,
        bedrooms,
        budget,
    ]

    // ошибки валидации
    await user.click(button)
    await waitFor(() => {
        fields.forEach((field) => {
            expect(field.parentElement!.parentElement!).toHaveClass(/error/)
        })
    })

    // заполняем поля TextField – ошибки пропадают
    for (const field of [firstname, lastname]) {
        await user.type(field, 'testname')
        await waitFor(() => {
            expect(field).toHaveValue('testname')
            expect(field.parentElement!.parentElement!).not.toHaveClass(/error/)
        })
    }
    await user.type(email, 't@t.ru')
    await waitFor(() => {
        expect(email.parentElement!.parentElement!).not.toHaveClass(/error/)
    })

    await user.type(phone, '+7 (999) 999-99-99')
    await waitFor(() => {
        expect(phone.parentElement!.parentElement!).not.toHaveClass(/error/)
    })

    // заполняем поля Select – ошибки пропадают
    for (const field of [location, type, bathrooms, bedrooms, budget]) {
        await user.click(field)
        await user.click(getAllByRole('listitem')[1] as HTMLElement)
        await waitFor(() => {
            expect(field.parentElement!.parentElement!).not.toHaveClass(/error/)
        })
    }

    // валидация чекбокса
    await user.click(button)
    expect(checkbox.parentElement!.parentElement!).toHaveClass(/error/)
    await user.click(checkbox)
    expect(checkbox.parentElement!.parentElement!).not.toHaveClass(/error/)

    return { user, button, firstname }
}

describe('OrderForm', () => {
    it('should be skeleton', async () => {
        const { getAllByTestId, findAllByPlaceholderText, queryByTestId } =
            render(<OrderForm />)

        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()

        await findAllByPlaceholderText(/placeholder/)
        expect(queryByTestId(TestId.SKELETON)).not.toBeInTheDocument()
    })

    it('should be form valid and sending', async () => {
        const { user, button, firstname } = await fillForm()

        // отправляем форму
        server.use(
            http.post(`${baseUrl}/orders`, () => {
                return HttpResponse.json()
            })
        )
        await user.click(button)
        await waitFor(() => {
            expect(firstname).toHaveValue('')
            expect(firstname.parentElement!.parentElement!).not.toHaveClass(
                /error/
            )
        })
    })

    it('should be error fetch', async () => {
        const { user, button, firstname } = await fillForm()

        // отправляем форму
        server.use(
            http.post(`${baseUrl}/orders`, () => {
                return HttpResponse.json(
                    {
                        error: 'Server error',
                        message: 'Test message error',
                    },
                    {
                        status: 400,
                    }
                )
            })
        )
        await user.click(button)
        await waitFor(() => {
            expect(firstname).toHaveValue('testname')
            expect(firstname.parentElement!.parentElement!).toHaveClass(/error/)
            expect(screen.getByText(/test message error/i)).toBeInTheDocument()
        })
    })
})
