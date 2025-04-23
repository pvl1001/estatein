import { FC } from 'react'
import { Link } from 'react-router'
import cn from 'classnames'
import { Social } from '../../lib/socials'
import s from './Copyright.module.scss'

type Props = {
    socials: Social[]
}

export const Copyright: FC<Props> = ({ socials }) => {
    return (
        <div className={s._}>
            <div className={cn('wrapper', s.container)}>
                <div className={s.text_container}>
                    <span>@2023 Estatein. All Rights Reserved.</span>
                    <Link to={'/'}>Terms & Conditions</Link>
                </div>

                <ul className={s.icon_list}>
                    {socials.map((social) => (
                        <li key={social.link}>
                            <a href={social.link} className={s.icon}>
                                {social.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
