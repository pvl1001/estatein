import { TResources } from '../config.ts'

export const en = {
    price: 'price',
    of: 'of',
    read_more: 'read more',
    step: 'step',
    empty: 'empty',
    not_found: 'not found',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    area: 'area',
    square_feet: 'square feet',
    button: {
        learn_more: 'learn more',
        browse_properties: 'browse $t(glossary:properties, upp)',
        view_property_details: 'view property details',
    },
    counter_card: {
        customers: 'happy customers',
        properties: '$t(glossary:properties, upp) for clients',
        experience: 'years of experience',
    },
    head_card: {
        home: 'find your dream home',
        value: 'unlock property value',
        management: 'effortless property management',
        investments: 'smart investments, informed decisions',
    },
    search: {
        submit_button: 'find property',
        placeholder: {
            search: 'search for a property',
            location: 'location',
            type: 'property type',
            price: 'pricing range',
            size: 'property size',
            year: 'build year',
        },
    },
    form: {
        fields: {
            firstname: {
                label: 'first name',
                placeholder: 'enter first name',
            },
            lastname: {
                label: 'last name',
                placeholder: 'enter last name',
            },
            email: {
                label: 'email',
                placeholder: 'enter your email',
            },
            phone: {
                label: 'phone',
                placeholder: 'enter phone number',
            },
            location: {
                label: 'preferred location',
                placeholder: 'select location',
            },
            type: {
                label: 'property type',
                placeholder: 'select property type',
            },
            bathrooms: {
                label: 'no. of bathrooms',
                placeholder: 'select no. of bedrooms',
            },
            bedrooms: {
                label: 'no. of bedrooms',
                placeholder: 'select no. of bedrooms',
            },
            budget: {
                label: 'budget',
                placeholder: 'select budget',
            },
            message: {
                label: 'message',
                placeholder: 'enter your message here...',
            },
            contact_method: {
                label: 'preferred contact method',
            },
            agree: 'I agree with <Link>Terms of Use</Link> and <Link>Privacy Policy</Link>',
        },
        button: 'send your order',
        errors: {
            required: '$t(form.fields.{{fieldKey}}.label) is a required field',
            email: 'enter email in the format example@m.com',
            phone: 'enter phone in the format +7 (000) 000-00-00',
        },
    },
}

export type LanguageStore<Key extends keyof TResources> = keyof TResources[Key]
