import { useForm } from 'react-hook-form'
import { FC } from 'react'
import cn from 'classnames'
import { Button } from 'shared/ui/button'
import { Icon } from 'shared/ui/icon'
import { Select } from 'shared/ui/select'
import s from './SearchProperty.module.scss'

type Props = {
    className?: string
}

const values = {
    search: '',
    location: '',
    type: '',
    range: '',
    size: '',
    year: '',
}

export const SearchProperty: FC<Props> = ({ className }) => {
    const { register, handleSubmit, setValue } = useForm({
        values,
    })

    function onSubmit(data: typeof values) {
        console.log(data)
    }

    return (
        <div className={cn(s._, className)}>
            <div className="wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className={s.search_input}>
                        <input
                            type="text"
                            autoComplete={'off'}
                            placeholder={'Search For A Property'}
                            {...register('search')}
                        />
                        <Button
                            type={'submit'}
                            theme={'primary'}
                            className={s.submit_button}
                        >
                            <div className={s.submit_button__icon}>
                                <Icon.Find />
                            </div>
                            <span className={s.submit_button__text}>
                                Find Property
                            </span>
                        </Button>
                    </label>

                    <fieldset className={s.fieldset}>
                        <Select
                            icon={<Icon.Location />}
                            placeholder={'Location'}
                            {...register('location')}
                            onChange={(value) => setValue('location', value)}
                        />
                        <Select
                            icon={<Icon.Property />}
                            placeholder={'Property Type'}
                            onChange={(value) => setValue('type', value)}
                        />
                        <Select
                            icon={<Icon.Photo />}
                            placeholder={'Pricing Range'}
                            onChange={(value) => setValue('range', value)}
                        />
                        <Select
                            icon={<Icon.Box />}
                            placeholder={'Property Size'}
                            onChange={(value) => setValue('size', value)}
                        />
                        <Select
                            icon={<Icon.Datepicker />}
                            placeholder={'Build Year'}
                            onChange={(value) => setValue('year', value)}
                        />
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
