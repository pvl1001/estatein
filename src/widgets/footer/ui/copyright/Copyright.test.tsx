import { render } from 'shared/lib/test-utils'
import { Icon } from 'shared/ui/icon'
import { Copyright } from './Copyright.tsx'

describe('Copyright', () => {
    it('should be render social list', () => {
        const { getByRole } = render(
            <Copyright
                socials={[
                    {
                        icon: <Icon.Facebook />,
                        link: 'https://test/',
                    },
                ]}
            />
        )
        const listItem = getByRole('listitem')

        const link = listItem.querySelector('a')
        expect(link).toHaveAttribute('href', 'https://test/')

        const useElement = listItem.querySelector('use')
        expect(useElement).toHaveAttribute('href', '#icon-facebook')
    })
})
