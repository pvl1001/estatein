export type TPropertyItem = {
    id: string
    img: string | undefined
    name: string
    description: string
    type: string
    location: string
    bedroomCount: number
    bathroomCount: number
    price: number
    size: number
    yearBuilt: number
    amenities: string[]
    isFeatured: boolean
    additional_fees: {
        property_transfer_tax: number
        legal_fees: number
    }
    mortgage: {
        recommended_mortgage: number
        down_payment_percentage: number
        down_payment_amount: number
        loan_amount: number
    }
    monthly_costs: {
        mortgage_payment: number
        property_tax: number
        homeowners_association_fee: number
        insurance: number
        total_monthly_costs: number
    }
}
