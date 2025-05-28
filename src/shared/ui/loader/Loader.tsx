import { FC } from 'react'
import cn from 'classnames'
import { TestId } from '../../lib/const'
import s from './Loader.module.scss'

type Props = {
    className?: string
}

export const Loader: FC<Props> = ({ className }) => {
    return <div className={cn(s._, className)} data-testid={TestId.LOADER} />
}
