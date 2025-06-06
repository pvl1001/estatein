import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { Ns } from 'shared/lib/const'
import { Icon } from 'shared/ui/icon'
import { DescribeTextField } from '../../describe_text_field'
import { useEmailForm } from '../lib/useEmailForm.ts'

type Props = {
    className?: string
}

export const EmailSubscriptionForm: FC<Props> = ({ className }) => {
    const { t } = useTranslation([Ns.FOOTER])
    const { register, errors, onSubmit, message, pending } = useEmailForm()

    return (
        <form onSubmit={onSubmit} className={className}>
            <DescribeTextField
                icon={<Icon.Email />}
                buttonIcon={<Icon.Send />}
                pending={pending}
                error={t(errors.email?.message as any)}
                message={t(message as any)}
                inputProps={{
                    placeholder: t('email.placeholder'),
                }}
                register={register('email')}
            />
        </form>
    )
}
