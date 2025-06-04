import { en } from './en.ts'

export const ru: typeof en = {
    price: 'цена',
    of: 'из',
    read_more: 'читать далее',
    step: 'шаг',
    empty: 'пусто',
    button: {
        learn_more: 'Подробнее',
        browse_properties: 'Посмотреть $t(glossary:property_acc)',
        view_property_details: 'Подробнее',
    },
    counter_card: {
        customers: 'довольных клиентов',
        properties: '$t(glossary:property_gen)',
        experience: 'лет опыта',
    },
    head_card: {
        home: 'найди дом своей мечты',
        value: 'разблокируй ценность недвижимости',
        management: 'простое управление недвижимостью',
        investments: 'умные инвестиции, обоснованные решения',
    },
    search: {
        submit_button: 'найти',
        placeholder: {
            search: 'поиск недвижимости',
            location: 'расположение',
            type: 'тип недвижимости',
            price: 'диапазон цен',
            size: 'площадь',
            year: 'год постройки',
        },
    },
}
