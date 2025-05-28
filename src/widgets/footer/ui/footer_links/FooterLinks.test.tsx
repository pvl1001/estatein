import { render } from 'shared/lib/test-utils'
import { footerLinks } from '../../lib/footerLinks.ts'
import { FooterLinks } from './FooterLinks.tsx'

describe('FooterLinks', () => {
    it('should be render categories and links', () => {
        const { getByText } = render(<FooterLinks links={footerLinks} />)
        const categories = Object.keys(footerLinks)

        for (const categoryName of categories) {
            const links = footerLinks[categoryName as keyof typeof footerLinks]
            expect(getByText(categoryName)).toBeInTheDocument()

            for (const { link, name } of links) {
                expect(getByText(RegExp(`.${name}`))).toHaveAttribute(
                    'href',
                    link
                )
            }
        }
    })
})
