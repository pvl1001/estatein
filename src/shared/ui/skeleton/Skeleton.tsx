import { createElement, isValidElement } from 'react'
import cn from 'classnames'
import s from './Skeleton.module.scss'

type SkeletonProps = {
    className?: string
}

type Props<P extends SkeletonProps> = {
    circular?: boolean
    children: React.ReactElement<P>
}

export function Skeleton<P extends SkeletonProps>({
    children,
    circular,
}: Props<P>) {
    if (!isValidElement(children)) {
        return null
    }

    return createElement(children.type, {
        ...children.props,
        className: cn(s._, children.props.className, circular && s._circular),
    })
}
