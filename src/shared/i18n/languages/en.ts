import { TResources } from '../config.ts'

export const en = {
    price: 'price',
    of: 'of',
    read_more: 'read more',
    step: 'step',
    empty: 'empty',
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
}

export type LanguageStore<Key extends keyof TResources> = keyof TResources[Key]
