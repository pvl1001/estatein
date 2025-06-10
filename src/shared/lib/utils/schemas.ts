import * as yup from 'yup'

export const schemas = {
    firstname: yup.string(),
    lastname: yup.string(),
    email: yup.string().matches(/^\w+@\w+\.\w{2,3}$/, {
        message: 'translation:form.errors.email',
    }),
    phone: yup.string().matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, {
        message: 'translation:form.errors.phone',
    }),
    location: yup.string(),
    type: yup.string(),
    bathrooms: yup.string(),
    bedrooms: yup.string(),
    budget: yup.string(),
    preferred_email: yup.string(),
    preferred_phone: yup.string(),
    message: yup.string(),
}
