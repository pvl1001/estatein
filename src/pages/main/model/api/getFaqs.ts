import { TFaq } from 'entities/faq_card'
import { request } from 'shared/api/request'

export const getFaqs = async (): Promise<TFaq[]> => {
    try {
        const result = await request<TFaq[]>('/faqs')
        return result.data
    } catch (err) {
        console.error(err)
        return []
    }
}
