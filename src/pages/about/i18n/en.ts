export const enAboutPage = {
    section: {
        head: {
            title: 'our journey',
            description:
                "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.",
        },
        values: {
            title: 'our values',
            description:
                'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.',
            card: {
                trust: {
                    title: 'trust',
                    description:
                        'Trust is the cornerstone of every successful real estate transaction.',
                },
                excellence: {
                    title: 'Excellence',
                    description:
                        'We set the bar high for ourselves. From the properties we list to the services we provide.',
                },
                client: {
                    title: 'Client-Centric',
                    description:
                        'Your dreams and needs are at the center of our universe. We listen, understand.',
                },
                commitment: {
                    title: 'Our Commitment',
                    description:
                        'We are dedicated to providing you with the highest level of service, professionalism, and support.',
                },
            },
        },
        achievements: {
            title: 'our achievements',
            description:
                'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.\n',
            card: {
                excellence: {
                    title: '3+ years of excellence',
                    description:
                        "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
                },
                clients: {
                    title: 'happy clients',
                    description:
                        'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.',
                },
                recognition: {
                    title: 'industry recognition',
                    description:
                        "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
                },
            },
        },
        experience: {
            title: 'navigating the estatein experience',
            description:
                "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.",
            card: {
                step_1: {
                    title: 'discover a world of possibilities',
                    description:
                        'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.',
                },
                step_2: {
                    title: 'narrowing down your choices',
                    description:
                        "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
                },
                step_3: {
                    title: 'personalized guidance',
                    description:
                        'Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.',
                },
                step_4: {
                    title: 'see it for yourself',
                    description:
                        "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
                },
                step_5: {
                    title: 'making informed decisions',
                    description:
                        'Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.',
                },
                step_6: {
                    title: 'getting the best deal',
                    description:
                        "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
                },
            },
        },
        team: {
            title: 'meet the estatein team',
            description:
                'At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.',
            position: {
                founder: 'founder',
                chief_officer: 'chief real estate officer',
                property_management: 'head of property management',
                counsel: 'legal counsel',
            },
        },
    },
}

export type TValueCardKeys = keyof typeof enAboutPage.section.values.card
export type TAchievementsCardKeys =
    keyof typeof enAboutPage.section.achievements.card
export type TExperienceCardKeys =
    keyof typeof enAboutPage.section.experience.card
export type TTeamPositionKeys = keyof typeof enAboutPage.section.team.position
