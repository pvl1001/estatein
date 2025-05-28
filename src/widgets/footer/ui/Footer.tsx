import { FC } from 'react'
import cn from 'classnames'
import { EmailSubscriptionForm } from 'features/email_subscription'
import { Logo } from 'shared/ui/logo'
import { footerLinks } from '../lib/footerLinks'
import { socials } from '../lib/socials'
import { Copyright } from './copyright/Copyright'
import { FooterLinks } from './footer_links/FooterLinks'
import s from './Footer.module.scss'

type Props = {}

export const Footer: FC<Props> = ({}) => {
    return (
        <footer className={s._}>
            <div className={cn('wrapper', s.container)}>
                <div className={s.email_container}>
                    <Logo />
                    <EmailSubscriptionForm className={s.form} />
                </div>
                <FooterLinks links={footerLinks} />
            </div>
            <Copyright socials={socials} />
        </footer>
    )
}
