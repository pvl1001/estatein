import { expect } from 'vitest'
import image from 'shared/assets/images/abstract.webp'
import { render } from 'shared/lib/test-utils'
import { Props, ReviewCard } from './ReviewCard.tsx'

describe('ReviewCard', () => {
    const initialProps: Props = {
        client: { avatar: undefined, name: '', location: '' },
        message: '',
        title: '',
        rating: 5,
    }

    it('should be render message', () => {
        const { getByText } = render(
            <ReviewCard {...initialProps} message={'test message'} />
        )
        expect(getByText(/test message/i)).toBeInTheDocument()
    })

    it('should be render title', () => {
        const { getByText } = render(
            <ReviewCard {...initialProps} title={'test title'} />
        )
        expect(getByText(/test title/i)).toBeInTheDocument()
    })

    it('should be render client', () => {
        const { getByText, getByRole } = render(
            <ReviewCard
                {...initialProps}
                client={{
                    name: 'Ivan',
                    location: 'Moscow',
                    avatar: image,
                }}
            />
        )
        expect(getByRole('img')).toHaveAttribute('src', image)
        expect(getByText(/ivan/i)).toBeInTheDocument()
        expect(getByText(/moscow/i)).toBeInTheDocument()
    })
})
