import { TestId } from 'shared/lib/const'
import { render, userEvent } from 'shared/lib/test-utils'
import { PropertiesPage } from './PropertiesPage.tsx'
import { queryByText, waitFor } from '@testing-library/react'

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
            container,
            getByRole,
            findByText,
            getByText,
        } = render(<PropertiesPage />)

        const inputSearch = await findByPlaceholderText(/placeholder\.search/i)
        const submitButton = getByRole('button', { name: /submit_button/i })

        // слайд загрузился, имя отобразилось
        expect(await findByText(/test name/i)).toBeInTheDocument()
        expect(queryByText(container, /test name/i)).toBeInTheDocument()

        // ввод любого текста
        await user.type(inputSearch, 'any text')
        expect(inputSearch).toHaveValue('any text')
        await user.click(submitButton)

        // слайды не найдены, отображается сообщение-заглушка
        await waitFor(() => {
            expect(queryByText(container, /test name/i)).not.toBeInTheDocument()
            expect(getByText(/not found/i)).toBeInTheDocument()
        })

        // очистили поле
        await user.clear(await findByPlaceholderText(/placeholder\.search/i))
        expect(inputSearch).toHaveValue('')
        await user.click(submitButton)

        // слайды снова отображаются
        expect(await findByText(/test name/i)).toBeInTheDocument()

        // ввели валидное значение для поиска
        await user.type(inputSearch, 'test')
        expect(inputSearch).toHaveValue('test')
        await user.click(submitButton)

        // отобразился найденный слайд
        expect(await findByText(/test name/i)).toBeInTheDocument()
    })
})
