import { describe, it } from 'vitest'
import { render } from '../../lib/test-utils'
import { Rating } from './Rating.tsx'
import s from './Rating.module.scss'

describe('Rating', () => {
    it.each([0, 1, 2, 3, 4, 5, 6])('should be %d', (n) => {
        const { container } = render(<Rating rating={n} />)
        if (n > 5) {
            expect(container.querySelectorAll(`.${s._active}`).length).toBe(5)
            return
        }
        expect(container.querySelectorAll(`.${s._active}`).length).toBe(n)
    })

    it.each([undefined, 10])('length should be %s', (length) => {
        const { getAllByRole } = render(<Rating rating={5} length={length} />)
        if (length === undefined) {
            expect(getAllByRole('listitem').length).toBe(5)
            return
        }
        expect(getAllByRole('listitem').length).toBe(length)
    })
})
