import { render } from 'shared/lib/test-utils'
import { Button } from './Button'

describe('Button', () => {
    it.each([
        { language: 'en', result: 'Test Test' },
        { language: 'ru', result: 'Test test' },
    ])('should capitalize text for $language', ({ language, result }) => {
        const { getByRole } = render(<Button>test test</Button>, {
            language: language,
        })
        expect(getByRole('button')).toHaveTextContent(result)
    })

    it('should apply default theme class when no theme provided', () => {
        const { getByRole } = render(<Button>Test</Button>)
        const button = getByRole('button')
        expect(button).toHaveClass(/_default/) // Предполагая, что s._default существует
    })

    it('should apply correct theme class for each theme variant', () => {
        const themes = ['default', 'link', 'primary', 'dark'] as const

        themes.forEach((theme) => {
            const { unmount, getByRole } = render(
                <Button theme={theme}>Test</Button>
            )
            const button = getByRole('button')
            expect(button).toHaveClass(RegExp(`_${theme}`))
            unmount()
        })
    })

    it('should render with link theme when "to" prop is provided', () => {
        const { getByRole } = render(<Button to="/some-path">Test</Button>, {
            route: '/some-path',
        })
        const link = getByRole('link')
        expect(link).toBeInTheDocument()
        expect(link).toHaveClass(/link/)

        const button = getByRole('button')
        expect(button).toHaveClass(/_default/)
    })
})
