import { TestId } from 'shared/lib/const'
import { render } from 'shared/lib/test-utils'
import { PropertiesSection, Props } from './PropertiesSection.tsx'

describe('PropertiesSection', () => {
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

    it('renders skeleton and displays properties after data is fetched', async () => {
        const { getAllByTestId, queryByTestId, findByText, queryByText } =
            render(<PropertiesSection {...initialProps} />)

        // Отображение скелетона
        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()
        expect(queryByText(/test name/i)).not.toBeInTheDocument()

        // Данные загрузились, имя отобразилось
        expect(await findByText(/test name/i)).toBeInTheDocument()
        expect(queryByTestId(TestId.SKELETON)).not.toBeInTheDocument()
    })
})
