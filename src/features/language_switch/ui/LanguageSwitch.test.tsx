import { i18nForTest, render, userEvent } from 'shared/lib/test-utils'
import { LanguageSwitch } from './LanguageSwitch.tsx'

describe('LanguageSwitch', () => {
    it('should be switch language EN/RU', async () => {
        const user = userEvent.setup()
        const { getByRole } = render(<LanguageSwitch />)

        const button = getByRole('button')
        expect(button).toHaveTextContent(/en/i)
        expect(i18nForTest.language).toBe('en')

        await user.click(button)
        expect(button).toHaveTextContent(/ru/i)
        expect(i18nForTest.language).toBe('ru')

        await user.click(button)
        expect(button).toHaveTextContent(/en/i)
        expect(i18nForTest.language).toBe('en')
    })
})
