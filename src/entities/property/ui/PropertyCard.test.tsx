import image from 'shared/assets/images/abstract.webp'
import { render } from 'shared/lib/test-utils'
import { PropertyCard } from './PropertyCard.tsx'

describe('PropertyCard', () => {
    const initialProps = {
        id: '1',
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
            <PropertyCard {...initialProps} name={'test name'} />
        )
        expect(getByText(/test name/i)).toBeInTheDocument()
    })

    it('should be render description', () => {
        const { getByText } = render(
            <PropertyCard {...initialProps} description={'test description'} />
        )
        expect(getByText(/test description/i)).toBeInTheDocument()
    })

    it('should be render type', () => {
        const { getByText } = render(
            <PropertyCard {...initialProps} type={'test'} />
        )
        expect(getByText(/test/i)).toBeInTheDocument()
    })

    it('should be render bedroomCount', () => {
        const { getByText } = render(
            <PropertyCard {...initialProps} bedroomCount={3} />
        )
        expect(getByText(/bedroom/i)).toBeInTheDocument()
    })

    it('should be render bathroomCount', () => {
        const { getByText } = render(
            <PropertyCard {...initialProps} bathroomCount={3} />
        )
        expect(getByText(/bathroom/i)).toBeInTheDocument()
    })

    it('should be render image', () => {
        const { getByRole } = render(
            <PropertyCard {...initialProps} img={image} />
        )
        expect(getByRole('img')).toHaveAttribute('src', image)
    })

    it('should be render category', () => {
        const { getByText } = render(
            <PropertyCard
                id={'1'}
                name={''}
                description={''}
                price={0}
                img={undefined}
                category={'Coastal Escapes'}
            />
        )
        expect(getByText(/coastal escapes/i)).toBeInTheDocument()
    })
})
