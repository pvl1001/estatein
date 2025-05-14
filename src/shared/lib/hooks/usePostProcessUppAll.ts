import { useTranslation } from 'react-i18next'
import { capitalize } from '../utils'

export const usePostProcessUppAll = <
    T extends React.PropsWithChildren['children'],
>(
    children: T
) => {
    const { i18n } = useTranslation()
    return typeof children === 'string'
        ? capitalize.uppAll(children, undefined, { lng: i18n.language })
        : children
}
