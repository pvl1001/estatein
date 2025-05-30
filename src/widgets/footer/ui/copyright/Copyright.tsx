import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { Link } from 'react-router'
import cn from 'classnames'
import { Ns } from 'shared/lib/const'
import { Social } from '../../lib/socials'
import s from './Copyright.module.scss'

type Props = {
    socials: Social[]
}

export const Copyright: FC<Props> = ({ socials }) => {
    const { t } = useTranslation([Ns.FOOTER])

    return (
        <div className={s._}>
            <div className={cn('wrapper', s.container)}>
                <div className={s.text_container}>
                    <span>
                        @{new Date().getFullYear()}{' '}
                        {t('rights', { postProcess: 'uppAll' })}
                    </span>
                    <Link to={'/'}>{t('terms')}</Link>
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
