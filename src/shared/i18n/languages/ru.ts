import { en } from './en.ts'

export const ru: typeof en = {
    price: 'цена',
    of: 'из',
    read_more: 'читать далее',
    step: 'шаг',
    empty: 'пусто',
    not_found: 'не найдено',
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
    form: {
        fields: {
            firstname: {
                label: 'Имя',
                placeholder: 'Введите имя',
            },
            lastname: {
                label: 'Фамилия',
                placeholder: 'Введите фамилию',
            },
            email: {
                label: 'Почта',
                placeholder: 'Введите почту',
            },
            phone: {
                label: 'Телефон',
                placeholder: 'Введите телефонный номер',
            },
            location: {
                label: 'Местоположение',
                placeholder: 'Выберите местоположение',
            },
            type: {
                label: 'Тип недвижимости',
                placeholder: 'Выберите тип недвижимости',
            },
            bathrooms: {
                label: 'Кол-во ванных комнат',
                placeholder: 'Выберите кол-во ванных комнат',
            },
            bedrooms: {
                label: 'Кол-во спален',
                placeholder: 'Выберите кол-во спален',
            },
            budget: {
                label: 'Бюджет',
                placeholder: 'выберите бюджет',
            },
            message: {
                label: 'сообщение',
                placeholder: 'введите ваше сообщение...',
            },
            contact_method: {
                label: 'Предпочтительный метод связи',
            },
            agree: 'Я согласен с <Link>Условиями использования</Link> и <Link>Политикой конфиденциальности</Link>',
        },
        button: 'Отправить заявку',
        errors: {
            required:
                '$t(form.fields.{{fieldKey}}.label) является обязательным полем',
            email: 'введите почту в формате example@m.ru',
            phone: 'введите номер в формате +7 (000) 000-00-00',
        },
    },
}
