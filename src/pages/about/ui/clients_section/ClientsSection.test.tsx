import { TestId } from 'shared/lib/const'
import { render } from 'shared/lib/test-utils'
import { ClientsSection } from './ClientsSection.tsx'

describe('ClientsSection', () => {
    it('should be render skeleton', () => {
        const { getAllByTestId } = render(<ClientsSection />)
        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()
    })

    it('should be render client cards with API', async () => {
        const { queryByTestId, findByText } = render(<ClientsSection />)
        expect(await findByText(/test/i)).toBeInTheDocument()
        expect(queryByTestId(TestId.SKELETON)).not.toBeInTheDocument()
    })
})
