import { useTranslation } from 'react-i18next'
import { MemoryRouter } from 'react-router'
import { Mock, expect, vi } from 'vitest'
import 'shared/lib/utils/globalUtils'
import { Button } from './Button'
import { render } from '@testing-library/react'

vi.mock('react-i18next', () => ({
    useTranslation: vi.fn(),
}))

describe('Button', () => {
    beforeEach(() => {
        vi.mocked(useTranslation as Mock).mockReturnValue({
            i18n: { language: 'en' },
        })
    })

    it.each([
        { language: 'en', result: 'Test Test' },
        { language: 'ru', result: 'Test test' },
    ])('should capitalize text for $language', ({ language, result }) => {
        vi.mocked(useTranslation as Mock).mockReturnValue({
            i18n: { language },
        })
        const { getByRole } = render(<Button>test test</Button>)
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
        const { getByRole } = render(
            <MemoryRouter>
                <Button to="/some-path">Test</Button>
            </MemoryRouter>
        )
        const link = getByRole('link')
        expect(link).toBeInTheDocument()
        expect(link).toHaveClass(/link/)

        const button = getByRole('button')
        expect(button).toHaveClass(/_default/)
    })
})
