import { TFeaturedItem } from '../types.ts'

export const featuredAdapter = async (
    data: TFeaturedItem[]
): Promise<TFeaturedItem[]> => {
    return await Promise.all(
        data.map(async (el: any) => {
            const imgModule = await import(
                `../images/feature_card_${el.img}.webp`
            )
            el.img = imgModule.default
            return el
        })
    )
}
