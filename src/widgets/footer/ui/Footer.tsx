import { FooterLinks as TFooterLinks } from 'app/lib/footerLinks'
import { Icon } from 'shared/ui/icon'
import { Logo } from 'shared/ui/logo'
import { TextField } from 'shared/ui/text_field'
import { FooterLinks } from './FooterLinks'
import s from './Footer.module.scss'

type Props = {
    links: TFooterLinks
}

export function Footer({ links }: Props) {
    function onSubmit(e: React.UIEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(e)
    }

    return (
        <footer className={s._}>
            <div className="wrapper">
                <div className={s.email_container}>
                    <Logo />
                    <form onSubmit={onSubmit} className={s.form}>
                        <TextField
                            icon={<Icon.Email />}
                            buttonIcon={<Icon.Send />}
                            inputProps={{
                                type: 'email',
                                placeholder: 'Enter Your Email',
                            }}
                        />
                    </form>
                </div>
                <FooterLinks links={links} />
            </div>
        </footer>
    )
}
