import { TestId } from 'shared/lib/const'
import { render } from 'shared/lib/test-utils'
import { PropertySearch } from './PropertySearch.tsx'

describe('PropertySearch', () => {
    it('isLoading - should be skeleton', () => {
        const { getAllByTestId } = render(<PropertySearch isLoading />)
        expect(getAllByTestId(TestId.SKELETON)[0]).toBeInTheDocument()
    })
})
