import { LanguageStore } from 'shared/i18n'
import { Ns } from 'shared/lib/const'
import { enFooter } from '../../widgets/footer'

type LinkCategory = LanguageStore<Ns.NAV>

type Link = {
    name: keyof typeof enFooter.sections
    link: string
}

export type FooterLinks = Record<LinkCategory, Link[]>

export const footerLinks: FooterLinks = {
    home: [
        { name: 'hero_section', link: '/hero_section' },
        { name: 'features', link: '/features' },
        { name: 'properties', link: '/properties' },
        { name: 'testimonials', link: '/testimonials' },
        { name: 'faq', link: '/faq' },
    ],
    about_us: [
        { name: 'our_story', link: '/our_story' },
        { name: 'our_works', link: '/our_works' },
        { name: 'how_it_works', link: '/how_it_works' },
        { name: 'our_team', link: '/our_team' },
        { name: 'our_clients', link: '/our_clients' },
    ],
    properties: [
        { name: 'portfolio', link: '/portfolio' },
        { name: 'categories', link: '/categories' },
    ],
    services: [
        { name: 'valuation_mastery', link: '/valuation_mastery' },
        { name: 'strategic_marketing', link: '/strategic_marketing' },
        { name: 'negotiation_wizardry', link: '/negotiation_wizardry' },
        { name: 'closing_success', link: '/closing_success' },
        { name: 'property_management', link: '/property_management' },
    ],
    contact_us: [
        { name: 'contact_form', link: '/contact_form' },
        { name: 'our_offices', link: '/our_offices' },
    ],
}
