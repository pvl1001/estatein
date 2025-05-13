export const en = {
    common: {
        price: 'price',
        of: 'of',
        read_more: 'read more',
    },
    nav: {
        home: 'home',
        about_us: 'about us',
        properties: '$t(glossary:properties)',
        services: 'services',
        contact_us: 'contact us',
    },
    page: {
        main: {
            section: {
                head: {
                    title: 'discover your dream $t(glossary:property, upp) with estatein',
                    description:
                        'Your journey to finding the perfect $t(glossary:property) begins here. Explore our listings to find the home that matches your dreams.',
                },
                featured: {
                    title: 'featured properties',
                    description:
                        'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.',
                    view_all_button: 'view all properties',
                },
                client: {
                    title: 'what our clients say',
                    description:
                        'Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.',
                    view_all_button: 'view all testimonials',
                },
                faq: {
                    title: 'frequently asked questions',
                    description:
                        "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
                    view_all_button: 'View All FAQ’s',
                },
            },
        },
    },
    journey_today: {
        title: 'start your real estate journey today',
        description:
            "Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.",
        button: 'explore properties',
    },
    footer: {
        email: 'Enter your email',
        hero_section: 'hero section',
        features: 'features',
        properties: 'properties',
        testimonials: 'testimonials',
        faq: 'faq',
        our_story: 'our story',
        our_works: 'our works',
        how_it_works: 'how it works',
        our_team: 'our team',
        our_clients: 'our clients',
        portfolio: 'portfolio',
        categories: 'categories',
        valuation_mastery: 'valuation mastery',
        strategic_marketing: 'strategic marketing',
        negotiation_wizardry: 'negotiation wizardry',
        closing_success: 'closing success',
        property_management: 'property management',
        contact_form: 'contact form',
        our_offices: 'our offices',
        rights: 'Estatein. All Rights Reserved.',
        terms: 'Terms & Conditions',
    },
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
}

export type LanguageStore<Key extends keyof typeof en> = keyof (typeof en)[Key]
