import { TCard } from 'shared/lib/types.ts'
import { Icon } from 'shared/ui/icon'
import { TValueCardKeys } from '../i18n/en.ts'

export const valueCards: TCard<TValueCardKeys>[] = [
    {
        icon: <Icon.Star2 />,
        textKey: 'trust',
    },
    {
        icon: <Icon.Hat />,
        textKey: 'excellence',
    },
    {
        icon: <Icon.Clients />,
        textKey: 'client',
    },
    {
        icon: <Icon.Star2 />,
        textKey: 'commitment',
    },
]
