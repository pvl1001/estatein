import { baseQuery } from 'shared/api/baseQuery.ts'
import { TFaq } from '../types.ts'
import { createApi } from '@reduxjs/toolkit/query/react'

export const faqApi = createApi({
    reducerPath: 'faqApi',
    baseQuery,
    endpoints: ({ query }) => ({
        getFaq: query<TFaq[], void>({
            query: () => '/faqs',
        }),
    }),
})

export const { useGetFaqQuery } = faqApi
