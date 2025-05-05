import { ElementType, FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import s from './Text.module.scss'

type Props = {
    className?: string
    as?: ElementType
}

type TextProps = Record<'Title' | 'Description', FC<PropsWithChildren<Props>>>

export const Text: TextProps = {
    Title: ({ className, children, as: Tag = 'h2' }) => (
        <Tag className={cn(className, s.title)}>{children}</Tag>
    ),
    Description: ({ className, children, as: Tag = 'span' }) => (
        <Tag className={cn(className, s.description)}>{children}</Tag>
    ),
}
