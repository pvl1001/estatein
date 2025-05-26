import { render } from '../../lib/test-utils'
import { Icon } from '../icon'
import { HeadCard } from './HeadCard.tsx'

describe('HeadCard', () => {
    it('should be ', () => {
        const { getByText, container } = render(
            <HeadCard icon={<Icon.Hat />} textKey={'home'} />
        )
        expect(getByText(/home/)).toBeInTheDocument()
        expect(container.querySelector('svg')).toBeInTheDocument()
    })
})
