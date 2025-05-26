import { describe, it } from 'vitest'
import { render } from '../../lib/test-utils'
import { Slider } from './Slider.tsx'

describe('Slider', () => {
    it('should be with slides and view button', () => {
        const slideList = [1, 2, 3]

        const { getByText, getByRole } = render(
            <Slider
                slideList={slideList}
                viewButton={<button>button</button>}
            />
        )

        slideList.forEach((slide) => {
            expect(getByText(slide)).toBeInTheDocument()
        })

        expect(getByRole('button', { name: /button/i })).toBeInTheDocument()
    })
})
