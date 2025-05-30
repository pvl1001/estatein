import { baseQuery } from 'shared/api/baseQuery'
import { TPropertyItem } from '../types'
import { createApi } from '@reduxjs/toolkit/query/react'

export const propertyApi = createApi({
    reducerPath: 'propertyApi',
    baseQuery,
    endpoints: ({ query }) => ({
        getProperty: query<TPropertyItem[], void>({
            query: () => '/properties',
        }),
    }),
})

export const { useGetPropertyQuery } = propertyApi
