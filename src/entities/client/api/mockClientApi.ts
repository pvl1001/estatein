import { HttpResponse, http } from 'msw'
import { baseUrl } from 'shared/api/baseQuery'
import { TClient } from '../types.ts'

export const mockClientApi = http.get(`${baseUrl}/clients`, () => {
    return HttpResponse.json<TClient[]>([
        {
            since: 2222,
            url: 'https://test.com',
            message: 'client message',
            name: 'company name',
            domain: 'company domain',
            category: 'test category',
        },
    ])
})
