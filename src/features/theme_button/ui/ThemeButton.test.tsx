import { vi } from 'vitest'
import { TestId } from 'shared/lib/const'
import { render, userEvent } from 'shared/lib/test-utils'
import { getCurrentTheme } from '../lib/useTheme.ts'
import { ThemeButton } from './ThemeButton.tsx'

// mock matchMedia
beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })),
    })
})

describe('ThemeButton', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('should render with dark theme icon initially', () => {
        const { getByTestId } = render(<ThemeButton />)
        expect(getByTestId(TestId.THEME_DARK)).toBeInTheDocument()
    })

    it('should call toggleTheme on button click', async () => {
        const { getByTestId, getByRole } = render(<ThemeButton />)

        const user = userEvent.setup()
        const button = getByRole('button')
        const htmlElement = document.querySelector('html')!
        const themes = [
            {
                testId: TestId.THEME_AUTO,
                theme: getCurrentTheme('auto'),
            },
            { testId: TestId.THEME_LIGHT, theme: 'light' },
            { testId: TestId.THEME_DARK, theme: 'dark' },
        ]

        for (const { theme, testId } of themes) {
            await user.click(button)
            expect(getByTestId(testId)).toBeInTheDocument()
            expect(htmlElement).toHaveAttribute('theme', theme)
        }
    })
})
