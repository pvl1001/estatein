import { baseQuery } from 'shared/api/baseQuery'
import { TPropertyItem } from '../types'
import { createApi } from '@reduxjs/toolkit/query/react'

export const propertyApi = createApi({
    reducerPath: 'propertyApi',
    baseQuery,
    endpoints: ({ query }) => ({
        getAllProperties: query<TPropertyItem[], void>({
            query: () => '/properties',
        }),
        getOneProperty: query<TPropertyItem, string>({
            query: (id) => `/properties/${id}`,
        }),
    }),
})

export const { useGetAllPropertiesQuery, useGetOnePropertyQuery } = propertyApi
