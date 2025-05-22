import cn from 'classnames'
import { FooterLinks as TFooterLinks } from 'app/lib/footerLinks'
import { EmailSubscriptionForm } from 'features/email_subscription'
import { Logo } from 'shared/ui/logo'
import { socials } from '../lib/socials'
import { FooterLinks } from './FooterLinks'
import { Copyright } from './copyright/Copyright'
import s from './Footer.module.scss'

type Props = {
    links: TFooterLinks
}

export function Footer({ links }: Props) {
    return (
        <footer className={s._}>
            <div className={cn('wrapper', s.container)}>
                <div className={s.email_container}>
                    <Logo />
                    <EmailSubscriptionForm className={s.form} />
                </div>
                <FooterLinks links={links} />
            </div>
            <Copyright socials={socials} />
        </footer>
    )
}
