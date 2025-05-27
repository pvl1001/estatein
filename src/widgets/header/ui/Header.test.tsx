import { Route, Routes } from 'react-router'
import { UserEvent, render, userEvent } from 'shared/lib/test-utils'
import { Header } from './Header.tsx'
import s from './Header.module.scss'

describe('Header', () => {
    let user: UserEvent

    beforeEach(() => {
        user = userEvent.setup()
    })

    it('should be toggle burger menu', async () => {
        const { container } = render(<Header />)

        const burgerButton = container.querySelector(`.${s.burger_button}`)!
        const burgerMenu = container.querySelector(`.${s.burger_menu}`)!

        expect(burgerMenu).not.toHaveClass(s._active)

        await user.click(burgerButton)

        expect(burgerMenu).toHaveClass(s._active)

        await user.click(burgerButton)

        expect(burgerMenu).not.toHaveClass(s._active)
    })

    it('should close burger menu when nav link is clicked', async () => {
        const { container, getByRole } = render(
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/about" element={<h1>About Page</h1>} />
            </Routes>
        )

        const navLink = getByRole('button', { name: /about/i })
        const burgerButton = container.querySelector(`.${s.burger_button}`)!
        const burgerMenu = container.querySelector(`.${s.burger_menu}`)!

        await user.click(burgerButton)

        expect(burgerMenu).toHaveClass(s._active)

        await user.click(navLink)

        expect(burgerMenu).not.toHaveClass(s._active)

        expect(
            getByRole('heading', { name: /about page/i })
        ).toBeInTheDocument()
    })
})
