import { Paths } from 'shared/lib/const'
import { Button } from 'shared/ui/button'
import { Skeleton } from 'shared/ui/skeleton'
import { Text } from 'shared/ui/text'
import s from './FaqCard.module.scss'

export const FaqCardSkeleton = () => {
    return (
        <article className={s._}>
            <Text.Title as={'h5'} className={s.question}>
                <Skeleton>
                    <span>Lorem ipsum dolor.</span>
                </Skeleton>
            </Text.Title>

            <Text.Description className={s.answer}>
                <Skeleton>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci asperiores autem blanditiis dolor fugit,
                        iste neque saepe sint temporibus voluptas? Amet animi
                        beatae cum doloremque ea esse itaque non tempora?
                    </span>
                </Skeleton>
            </Text.Description>

            <Skeleton>
                <Button to={Paths.MAIN} className={s.button}>
                    Read More
                </Button>
            </Skeleton>
        </article>
    )
}
