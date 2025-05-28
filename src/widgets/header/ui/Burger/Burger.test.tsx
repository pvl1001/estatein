import { vi } from 'vitest'
import { render } from 'shared/lib/test-utils'
import { Burger } from './Burger.tsx'
import s from './Burger.module.scss'

describe('Burger', () => {
    it.each([true, false])('should be is active: %j', (isActive) => {
        const { container } = render(
            <Burger isActive={isActive} onClick={vi.fn()} />
        )
        const element = container.querySelector(`.${s._}`)!
        expect(element.className.includes(s.active)).toBe(isActive)
    })
})
