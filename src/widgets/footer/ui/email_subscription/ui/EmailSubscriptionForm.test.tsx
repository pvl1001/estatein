import { HttpResponse, delay, http } from 'msw'
import { baseUrl } from 'shared/api/baseQuery.ts'
import { TestId } from 'shared/lib/const'
import {
    RenderResult,
    UserEvent,
    render,
    server,
    userEvent,
    waitFor,
} from 'shared/lib/test-utils'
import { EmailSubscriptionForm } from './EmailSubscriptionForm.tsx'

describe('EmailSubscriptionForm', () => {
    let renderResult: RenderResult
    let input: HTMLElement
    let submitButton: HTMLElement
    let user: UserEvent

    beforeEach(() => {
        user = userEvent.setup()
        renderResult = render(<EmailSubscriptionForm />)
        input = renderResult.getByRole('textbox')
        submitButton = renderResult.getByRole('button')
    })

    it.each([
        'test@.ru',
        '.@.ru',
        'test @mail.ru',
        '@mail.ru',
        '!test@mail.',
        'testЯ@mail.ru',
    ])('should show error for invalid email: %s', async (email) => {
        const { queryByText } = renderResult

        await user.type(input, email)
        await user.click(submitButton)

        expect(queryByText(/error/i)).toBeInTheDocument()
    })

    it('should show validation error on empty submit', async () => {
        const { queryByText } = renderResult

        await user.click(submitButton)
        expect(queryByText(/error/i)).toBeInTheDocument()
    })

    it('should remove error after valid input', async () => {
        const { queryByText } = renderResult

        await user.click(submitButton)
        expect(queryByText(/error/i)).toBeInTheDocument()

        await user.type(input, 'test@mail.ru')
        expect(queryByText(/error/i)).not.toBeInTheDocument()
    })

    it('should show loader during API request', async () => {
        // Мокаем успешный ответ с задержкой
        server.use(
            http.post(`${baseUrl}/emails`, async () => {
                await delay(500)
                return HttpResponse.json()
            })
        )

        const { getByTestId, queryByTestId } = renderResult

        await user.type(input, 'test@mail.ru')
        await waitFor(() => {
            expect(input).toHaveValue('test@mail.ru')
        })
        await user.click(submitButton)

        // Проверяем что лоадер появился
        expect(getByTestId(TestId.LOADER)).toBeInTheDocument()

        // Ждем завершения запроса и проверяем что лоадер исчез
        await waitFor(() => {
            expect(queryByTestId(TestId.LOADER)).not.toBeInTheDocument()
        })
    })

    it('should show success message on successful submission', async () => {
        // Мокаем успешный ответ
        server.use(http.post(`${baseUrl}/emails`, () => HttpResponse.json()))

        const { findByText } = renderResult

        await user.type(input, 'test@mail.ru')
        await waitFor(() => {
            expect(input).toHaveValue('test@mail.ru')
        })
        await user.click(submitButton)

        expect(await findByText(/success/i)).toBeInTheDocument()
    })

    it('should show error message on API failure', async () => {
        server.use(
            http.post(`${baseUrl}/emails`, () => {
                return HttpResponse.json(
                    { message: 'API Error' },
                    { status: 400 }
                )
            })
        )

        const { findByText } = renderResult

        await user.type(input, 'test@mail.ru')
        await waitFor(() => {
            expect(input).toHaveValue('test@mail.ru')
        })
        await user.click(submitButton)

        expect(await findByText(/API Error/i)).toBeInTheDocument()
    })
})
