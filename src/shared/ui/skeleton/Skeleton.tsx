import { CSSProperties, createElement, isValidElement } from 'react'
import cn from 'classnames'
import { TestId } from '../../lib/const'
import s from './Skeleton.module.scss'

type SkeletonProps = {
    className?: string
}

type Props<P extends SkeletonProps> = {
    circular?: boolean
    children: React.ReactElement<P>
    width?: CSSProperties['width']
}

export function Skeleton<P extends SkeletonProps>({
    children,
    circular,
    width,
}: Props<P>) {
    if (!isValidElement(children)) {
        return null
    }

    return createElement(children.type, {
        ...children.props,
        ['data-testid']: TestId.SKELETON,
        style: { width },
        className: cn(s._, children.props.className, circular && s._circular),
    })
}
