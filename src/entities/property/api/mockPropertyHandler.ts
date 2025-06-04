import { HttpResponse, http } from 'msw'
import { baseUrl } from 'shared/api/baseQuery.ts'
import { TPropertyItem } from '../types.ts'

export const mockPropertyResponse: TPropertyItem[] = [
    {
        id: 'test id',
        img: 'test img',
        name: 'test name',
        description: 'test description',
        type: 'test type',
        location: 'test location',
        bedroomCount: 0,
        bathroomCount: 0,
        price: 0,
        size: 0,
        year: 0,
        amenities: [],
        isFeatured: true,
        additional_fees: {
            property_transfer_tax: 0,
            legal_fees: 0,
        },
        mortgage: {
            recommended_mortgage: 0,
            down_payment_percentage: 0,
            down_payment_amount: 0,
            loan_amount: 0,
        },
        monthly_costs: {
            mortgage_payment: 0,
            property_tax: 0,
            homeowners_association_fee: 0,
            insurance: 0,
            total_monthly_costs: 0,
        },
        category: 'Coastal Escapes',
    },
]

export const mockPropertyHandler = http.get(`${baseUrl}/properties`, () => {
    return HttpResponse.json<TPropertyItem[]>(mockPropertyResponse)
})
