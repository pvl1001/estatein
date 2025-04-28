import { TFeaturedItem } from 'entities/featured_card'

export const featuredsAdapter = async (
    data: TFeaturedItem[]
): Promise<TFeaturedItem[]> => {
    return await Promise.all(
        data.map(async (el: any) => {
            const imgModule = await import(
                `../../img/feature_card_${el.img}.webp`
            )
            el.img = imgModule.default
            return el
        })
    )
}
