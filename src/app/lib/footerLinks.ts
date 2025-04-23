type LinkCategory =
    | 'Home'
    | 'About Us'
    | 'Properties'
    | 'Services'
    | 'Contact Us'

type Link = {
    name: string
    link: string
}

export type FooterLinks = Record<LinkCategory, Link[]>

export const footerLinks: FooterLinks = {
    Home: [
        { name: 'Hero Section', link: '/hero_section' },
        { name: 'Features', link: '/features' },
        { name: 'Properties', link: '/properties' },
        { name: 'Testimonials', link: '/testimonials' },
        { name: 'FAQ’s', link: '/faq' },
    ],
    'About Us': [
        { name: 'Our Story', link: '/our_story' },
        { name: 'Our Works', link: '/our_works' },
        { name: 'How It Works', link: '/how_it_works' },
        { name: 'Our Team', link: '/our_team' },
        { name: 'Our Clients', link: '/our_clients' },
    ],
    Properties: [
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'Categories', link: '/categories' },
    ],
    Services: [
        { name: 'Valuation Mastery', link: '/valuation_mastery' },
        { name: 'Strategic Marketing', link: '/strategic_marketing' },
        { name: 'Negotiation Wizardry', link: '/negotiation_wizardry' },
        { name: 'Closing Success', link: '/closing_success' },
        { name: 'Property Managements', link: '/property_management' },
    ],
    'Contact Us': [
        { name: 'Contact Form', link: '/contact_form' },
        { name: 'Our Offices', link: '/our_offices' },
    ],
}
