import { HttpResponse, http } from 'msw'
import { baseUrl } from 'shared/api/baseQuery.ts'
import { TFeaturedItem } from '../types.ts'

export const mockFeaturedHandler = http.get(`${baseUrl}/featureds`, () => {
    return HttpResponse.json<TFeaturedItem[]>([
        {
            id: 'id',
            img: 'test img',
            name: 'test name',
            description: 'test description',
            type: 'test type',
            bedroomCount: 1,
            bathroomCount: 2,
            price: 1000,
        },
    ])
})
