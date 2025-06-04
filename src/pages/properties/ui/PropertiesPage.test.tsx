import { TestId } from 'shared/lib/const'
import { render, userEvent, waitFor } from 'shared/lib/test-utils'
import { PropertiesPage } from './PropertiesPage.tsx'

describe('PropertiesPage', () => {
    it('renders skeleton and displays properties', async () => {
        const { getAllByTestId, queryByTestId, findByText, queryByText } =
            render(<PropertiesPage />)

        // Отображение скелетона
        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()
        expect(queryByText(/test name/i)).not.toBeInTheDocument()

        // Данные загрузились, имя отобразилось
        expect(await findByText(/test name/i)).toBeInTheDocument()
        expect(queryByTestId(TestId.SKELETON)).not.toBeInTheDocument()
    })

    it('should search properties correctly', async () => {
        const user = userEvent.setup()
        const {
            findByPlaceholderText,
            getByRole,
            findByText,
            queryByText,
            getByText,
        } = render(<PropertiesPage />)

        const inputSearch = await findByPlaceholderText(/placeholder\.search/i)
        const submitButton = getByRole('button', { name: /submit_button/i })

        // слайд загрузился, имя отобразилось
        expect(await findByText(/test name/i)).toBeInTheDocument()
        expect(queryByText(/test name/i)).toBeInTheDocument()

        // ввод любого текста
        await user.type(inputSearch, 'any text')
        await waitFor(() => {
            expect(inputSearch).toHaveValue('any text')
        })
        await user.click(submitButton)

        // слайды не найдены, отображается сообщение-заглушка
        await waitFor(() => {
            expect(queryByText(/test name/i)).not.toBeInTheDocument()
            expect(getByText(/not_found/i)).toBeInTheDocument()
        })

        // очистили поле
        await user.clear(inputSearch)
        await waitFor(() => {
            expect(inputSearch).toHaveValue('')
        })
        await user.click(submitButton)

        // слайды снова отображаются
        await waitFor(() => {
            expect(getByText(/test name/i)).toBeInTheDocument()
        })

        // ввели валидное значение для поиска
        await user.type(inputSearch, 'test')
        await waitFor(() => {
            expect(inputSearch).toHaveValue('test')
        })
        await user.click(submitButton)

        // отобразился найденный слайд
        await waitFor(() => {
            expect(getByText(/test name/i)).toBeInTheDocument()
        })
    })
})
