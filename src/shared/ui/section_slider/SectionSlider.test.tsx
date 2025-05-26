import { Paths } from '../../lib/const'
import { render } from '../../lib/test-utils'
import { SectionSlider } from './SectionSlider.tsx'

describe('SectionSlider', () => {
    it('should be with title, description', () => {
        const { getByText } = render(
            <SectionSlider
                title={'title text'}
                description={'text description'}
                slideList={[]}
            />
        )

        expect(getByText(/title/)).toBeInTheDocument()
        expect(getByText(/description/)).toBeInTheDocument()
    })

    it('should be with slides', () => {
        const slideList = [1, 2, 3]
        const { getByText } = render(
            <SectionSlider title={''} description={''} slideList={slideList} />
        )

        slideList.forEach((slide) => {
            expect(getByText(slide)).toBeInTheDocument()
        })
    })

    it('should be with button "View All"', () => {
        const { getAllByRole } = render(
            <SectionSlider
                title={''}
                description={''}
                slideList={[]}
                buttonViewAllProps={{ text: 'text button', to: Paths.MAIN }}
            />
        )
        getAllByRole('button', { name: /text button/i }).forEach((button) =>
            expect(button).toBeInTheDocument()
        )
    })
})
