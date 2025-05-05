import { FC, useState } from 'react'
import s from './FeaturedCard.module.scss'

type Props = {
    children: string
}

export const TruncatedText: FC<Props> = ({ children: text }) => {
    const shortText: string = text.slice(0, 70)
    const hasReadMore: boolean = text !== shortText
    const [isShowMore, setIsShowMore] = useState(false)
    const showMore = () => setIsShowMore(true)

    return (
        <>
            {isShowMore ? text : shortText}
            {hasReadMore && !isShowMore && (
                <>
                    ...{' '}
                    <span className={s.read_more} onClick={showMore}>
                        Read More
                    </span>
                </>
            )}
        </>
    )
}
