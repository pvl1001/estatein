import { vi } from 'vitest'
import { render, userEvent } from 'shared/lib/test-utils'
import { routes } from '../../lib/routes.ts'
import { NavList } from './NavList.tsx'

describe('NavList', () => {
    it('should be render link name and path', () => {
        const { getByText, getAllByRole } = render(
            <NavList routeList={routes} onClick={vi.fn} />
        )
        const links = getAllByRole('link')

        routes.forEach(({ name, path }, index) => {
            expect(getByText(RegExp(name, 'i'))).toBeInTheDocument()
            expect(links[index]).toHaveAttribute('href', path)
        })
    })

    it('should toggle "default" class when click nav link', async () => {
        const user = userEvent.setup()
        const mockOnClick = vi.fn()
        const { getByRole } = render(
            <NavList routeList={routes} onClick={mockOnClick} />
        )
        const initialNavLink = getByRole('button', {
            name: RegExp(routes[0].name, 'i'),
        })
        const secondNavLink = getByRole('button', {
            name: RegExp(routes[1].name, 'i'),
        })

        expect(initialNavLink).toHaveClass(/default/i)
        expect(secondNavLink).not.toHaveClass(/default/i)

        await user.click(secondNavLink)

        expect(initialNavLink).not.toHaveClass(/default/i)
        expect(secondNavLink).toHaveClass(/default/i)

        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })
})
