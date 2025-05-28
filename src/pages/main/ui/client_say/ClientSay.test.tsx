import { TestId } from 'shared/lib/const'
import { render } from 'shared/lib/test-utils'
import { ClientSay } from './ClientSay.tsx'

describe('ClientSay', () => {
    it('should be skeleton', () => {
        const { getAllByTestId } = render(<ClientSay />)
        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()
    })

    it('renders skeleton and displays reviews after data is fetched', async () => {
        const { getAllByTestId, queryByTestId, findByText, queryByText } =
            render(<ClientSay />)

        // Отображение скелетона
        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()
        expect(queryByText(/test name/i)).not.toBeInTheDocument()

        // Данные загрузились, имя отобразилось
        expect(await findByText(/test name/i)).toBeInTheDocument()
        expect(queryByTestId(TestId.SKELETON)).not.toBeInTheDocument()
    })
})
