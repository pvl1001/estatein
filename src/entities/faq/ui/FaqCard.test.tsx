import { describe, it } from 'vitest'
import { render } from 'shared/lib/test-utils'
import { FaqCard } from './FaqCard.tsx'

describe('FaqCard', () => {
    it('should be with answer and question', () => {
        const { getByText } = render(
            <FaqCard answer={'answer'} question={'question'} />
        )
        expect(getByText(/answer/i)).toBeInTheDocument()
        expect(getByText(/question/i)).toBeInTheDocument()
    })
})
