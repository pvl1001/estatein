import { render } from '../../lib/test-utils'
import { Price } from './Price.tsx'

describe('Price', () => {
    it.each([
        { price: 1, result: '$1,00' },
        { price: 1.11, result: '$1,11' },
        { price: 100, result: '$100,00' },
        { price: 1000, result: '$1,000,00' },
    ])('price $price should be $result', ({ result, price }) => {
        const { getByText } = render(<Price>{price}</Price>)
        expect(getByText(result)).toBeInTheDocument()
    })
})
