import { render } from '../../lib/test-utils'
import { Slider } from './Slider.tsx'

describe('Slider', () => {
    it('should be with slides and view button', () => {
        const slideList = Array(4)

        const { getByText, getByRole } = render(
            <Slider
                slideList={slideList.map((n) => (
                    <div>slide{n}</div>
                ))}
                viewButton={<button>button</button>}
                config={{
                    slidesPerView: 3,
                    virtual: false,
                }}
            />
        )

        slideList.forEach((n) => {
            expect(getByText(`slide${n}`)).toBeInTheDocument()
        })

        expect(getByRole('button', { name: /button/i })).toBeInTheDocument()
    })
})
