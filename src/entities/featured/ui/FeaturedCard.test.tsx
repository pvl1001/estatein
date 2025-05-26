import image from 'shared/assets/images/abstract.webp'
import { render } from 'shared/lib/test-utils'
import { FeaturedCard } from './FeaturedCard.tsx'
import s from './FeaturedCard.module.scss'

describe('FeaturedCard', () => {
    const initialProps = {
        name: '',
        description: '',
        type: '',
        img: undefined,
        bathroomCount: 0,
        bedroomCount: 0,
        price: 0,
    }

    it('should be render name', () => {
        const { getByText } = render(
            <FeaturedCard {...initialProps} name={'test name'} />
        )
        expect(getByText(/test name/i)).toBeInTheDocument()
    })

    it('should be render description', () => {
        const { getByText } = render(
            <FeaturedCard {...initialProps} description={'test description'} />
        )
        expect(getByText(/test description/i)).toBeInTheDocument()
    })

    it('should be render type', () => {
        const { getByText } = render(
            <FeaturedCard {...initialProps} type={'test'} />
        )
        expect(getByText(/test/i)).toBeInTheDocument()
    })

    it('should be render bedroomCount', () => {
        const { getByText } = render(
            <FeaturedCard {...initialProps} bedroomCount={3} />
        )
        expect(getByText(/bedroom/i)).toBeInTheDocument()
    })

    it('should be render bathroomCount', () => {
        const { getByText } = render(
            <FeaturedCard {...initialProps} bathroomCount={3} />
        )
        expect(getByText(/bathroom/i)).toBeInTheDocument()
    })

    it('should be render image', () => {
        const { getByRole } = render(
            <FeaturedCard {...initialProps} img={image} />
        )
        expect(getByRole('img')).toHaveAttribute('src', image)
    })

    it.each([
        { price: 1, result: '$1,00' },
        { price: 1.11, result: '$1,11' },
        { price: 100, result: '$100,00' },
        { price: 1000, result: '$1,000,00' },
    ])('price $price should be $result', ({ result, price }) => {
        const { container } = render(
            <FeaturedCard {...initialProps} price={price} />
        )
        const priceElement = container.querySelector(`.${s.price}`)!
        expect(priceElement.textContent).toBe(result)
    })
})
