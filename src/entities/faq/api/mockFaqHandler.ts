import { HttpResponse, http } from 'msw'
import { baseUrl } from 'shared/api/baseQuery'
import { TFaq } from '../types.ts'

export const mockFaqHandler = http.get(`${baseUrl}/faqs`, () => {
    return HttpResponse.json<TFaq[]>([
        {
            id: 'id',
            question: 'test question',
            answer: 'test answer',
        },
    ])
})
