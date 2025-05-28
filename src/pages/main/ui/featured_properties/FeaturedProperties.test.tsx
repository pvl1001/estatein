import { TestId } from 'shared/lib/const'
import { render } from 'shared/lib/test-utils'
import { FeaturedProperties } from './FeaturedProperties.tsx'

describe('FeaturedProperties', () => {
    it('should be skeleton', () => {
        const { getAllByTestId } = render(<FeaturedProperties />)
        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()
    })

    it('renders skeleton and displays featureds after data is fetched', async () => {
        const { getAllByTestId, queryByTestId, findByText, queryByText } =
            render(<FeaturedProperties />)

        // Отображение скелетона
        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()
        expect(queryByText(/test name/i)).not.toBeInTheDocument()

        // Данные загрузились, имя отобразилось
        expect(await findByText(/test name/i)).toBeInTheDocument()
        expect(queryByTestId(TestId.SKELETON)).not.toBeInTheDocument()
    })
})
