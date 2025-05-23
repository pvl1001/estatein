import { render } from '../../lib/test-utils'
import { CounterList } from './CounterList.tsx'

describe('CounterList', () => {
    it('should be render', () => {
        const { getByRole, getByText } = render(
            <CounterList counterList={[{ count: '1', textKey: 'customers' }]} />
        )
        expect(getByRole('listitem')).toBeInTheDocument()
        expect(getByText('1')).toBeInTheDocument()
        expect(getByText(/customers/)).toBeInTheDocument()
    })
})
