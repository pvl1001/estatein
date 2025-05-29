import { TestId } from 'shared/lib/const'
import { render } from 'shared/lib/test-utils'
import { PropertiesSection, Props } from './PropertiesSection.tsx'

describe('FeaturedProperties', () => {
    const initialProps: Props = {
        title: '',
        description: '',
    }

    it('should be skeleton', () => {
        const { getAllByTestId, unmount } = render(
            <PropertiesSection {...initialProps} />
        )
        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()
        unmount()
    })

    it('renders skeleton and displays featureds after data is fetched', async () => {
        const { getAllByTestId, queryByTestId, findByText, queryByText } =
            render(<PropertiesSection {...initialProps} />)

        // Отображение скелетона
        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()
        expect(queryByText(/test name/i)).not.toBeInTheDocument()

        // Данные загрузились, имя отобразилось
        expect(await findByText(/test name/i)).toBeInTheDocument()
        expect(queryByTestId(TestId.SKELETON)).not.toBeInTheDocument()
    })

    it('should be render title', () => {
        const { getByText } = render(
            <PropertiesSection {...initialProps} title={'test title'} />
        )
        expect(getByText(/test title/i)).toBeInTheDocument()
    })

    it('should be render description', () => {
        const { getByText } = render(
            <PropertiesSection
                {...initialProps}
                description={'description message'}
            />
        )
        expect(getByText(/description message/i)).toBeInTheDocument()
    })
})
