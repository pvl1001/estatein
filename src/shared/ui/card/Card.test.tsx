import { render } from 'shared/lib/test-utils'
import { Icon } from '../icon'
import { Card } from './Card.tsx'
import s from './Card.module.scss'

describe('Card', () => {
    it('should be title and description', () => {
        const { getByText } = render(
            <Card title={'title text'} description={'description text'} />
        )
        expect(getByText(/title text/)).toBeInTheDocument()
        expect(getByText(/description text/)).toBeInTheDocument()
    })

    it('should be icon', () => {
        const { container } = render(
            <Card
                title={'title text'}
                description={'description text'}
                icon={<Icon.Hat />}
            />
        )
        expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it.each([
        { props: { withBorder: true }, className: s._border },
        { props: { withBoxShadow: true }, className: s._box_shadow },
    ])('should be with props: $props', ({ props, className }) => {
        const { container } = render(
            <Card
                title={'title text'}
                description={'description text'}
                {...props}
            />
        )
        expect(container.querySelector(`.${s._}`)).toHaveClass(className)
    })
})
