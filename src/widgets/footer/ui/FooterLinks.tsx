import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { FooterLinks as TFooterLinks } from 'app/lib/footerLinks'
import { LanguageStore } from 'shared/i18n'
import { Ns } from 'shared/lib/const'
import s from './Footer.module.scss'

type Props = {
    links: TFooterLinks
}

export const FooterLinks: FC<Props> = ({ links }) => {
    const { t } = useTranslation([Ns.FOOTER, Ns.NAV])
    return (
        <ul className={s.category_list}>
            {Object.keys(links).map((categoryName) => (
                <li key={categoryName}>
                    <h5 className={s.category_list__title}>
                        {t(
                            `${Ns.NAV}:${categoryName as LanguageStore<Ns.NAV>}`,
                            {
                                postProcess: 'uppAll',
                            }
                        )}
                    </h5>

                    <ul className={s.link_list}>
                        {links[categoryName as keyof typeof links].map(
                            (item) => (
                                <li key={item.name}>
                                    <a
                                        target={'_blank'}
                                        href={item.link}
                                        className={s.link}
                                    >
                                        {t(item.name, {
                                            postProcess: 'uppAll',
                                        })}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </li>
            ))}
        </ul>
    )
}
