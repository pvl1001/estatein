import { FC } from 'react'
import { FooterLinks as TFooterLinks } from 'app/lib/footerLinks'
import s from './Footer.module.scss'

type Props = {
    links: TFooterLinks
}

export const FooterLinks: FC<Props> = ({ links }) => {
    return (
        <ul className={s.category_list}>
            {Object.keys(links).map((categoryName) => (
                <li key={categoryName}>
                    <h5 className={s.category_list__title}>{categoryName}</h5>

                    <ul className={s.link_list}>
                        {links[categoryName as keyof typeof links].map(
                            (item) => (
                                <li key={item.name}>
                                    <a
                                        target={'_blank'}
                                        href={item.link}
                                        className={s.link}
                                    >
                                        {item.name}
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
