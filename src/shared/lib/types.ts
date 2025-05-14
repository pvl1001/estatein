import { ReactNode } from 'react'

export type TCard<T extends string = string> = {
    icon?: ReactNode
    textKey: T
}
