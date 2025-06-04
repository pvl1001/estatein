import { TestId } from 'shared/lib/const'
import { render } from 'shared/lib/test-utils'
import { PropertiesPage } from '../PropertiesPage.tsx'

describe('PropertyPage', () => {
    it('renders skeleton and displays properties after data is fetched', async () => {
        const { getAllByTestId, queryByTestId, findByText, queryByText } =
            render(<PropertiesPage />)

        // Отображение скелетона
        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()
        expect(queryByText(/test name/i)).not.toBeInTheDocument()

        // Данные загрузились, имя отобразилось
        expect(await findByText(/test name/i)).toBeInTheDocument()
        expect(queryByTestId(TestId.SKELETON)).not.toBeInTheDocument()
    })
})
