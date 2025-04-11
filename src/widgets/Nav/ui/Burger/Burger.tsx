import cn from 'classnames'
import s from './Burger.module.scss'

type Props = {
    isActive: boolean
    className?: string
    onClick: () => void
}

export function Burger({ isActive, className, onClick }: Props) {
    return (
        <div className={cn(s._, className, isActive && s.active)} onClick={onClick}>
            <div className={s.box}>
                <div className={s.inner}></div>
            </div>
        </div>
    )
}
