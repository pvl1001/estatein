import { render } from '../../../lib/test-utils'
import { Checkbox } from './Checkbox.tsx'

describe('test Checkbox', () => {
    it('should render', () => {
        const { getByRole } = render(<Checkbox />)
        expect(getByRole('checkbox')).toBeInTheDocument()
    })
})
