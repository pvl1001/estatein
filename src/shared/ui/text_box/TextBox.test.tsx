import { describe, it } from 'vitest'
import { render } from '../../lib/test-utils'
import { TextBox } from './TextBox.tsx'

describe('TextBox', () => {
    it('should be with title and description', () => {
        const { getByText } = render(
            <TextBox title={'title'} description={'description'} />
        )
        expect(getByText(/title/i)).toBeInTheDocument()
        expect(getByText(/description/i)).toBeInTheDocument()
    })

    it.each([{ withStars: true }, { withStars: false }])(
        'should be with props %s',
        ({ withStars }) => {
            const { container } = render(
                <TextBox title={''} description={''} withStars={withStars} />
            )
            const useElement = container.querySelector(
                'use[href="#icon-stars"]'
            )

            withStars
                ? expect(useElement).toBeInTheDocument()
                : expect(useElement).not.toBeInTheDocument()
        }
    )
})
