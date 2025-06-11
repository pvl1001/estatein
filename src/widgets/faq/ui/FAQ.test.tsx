import { TestId } from 'shared/lib/const'
import { render } from 'shared/lib/test-utils'
import { Faq } from './FAQ.tsx'

describe('FAQ section', () => {
    it('should be skeleton', () => {
        const { getAllByTestId } = render(<Faq />)
        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()
    })

    it("renders skeleton and displays faq's after data is fetched", async () => {
        const { getAllByTestId, queryByTestId, findByText, queryByText } =
            render(<Faq />)

        // Отображение скелетона
        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()
        expect(queryByText(/test answer/i)).not.toBeInTheDocument()

        // Данные загрузились, имя отобразилось
        expect(await findByText(/test question/i)).toBeInTheDocument()
        expect(queryByTestId(TestId.SKELETON)).not.toBeInTheDocument()
    })
})
