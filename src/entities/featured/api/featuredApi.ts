import { baseQuery } from 'shared/api/baseQuery'
import { TFeaturedItem } from '../types'
import { featuredAdapter } from './featuredAdapter.ts'
import { createApi } from '@reduxjs/toolkit/query/react'

export const featuredApi = createApi({
    reducerPath: 'featuredApi',
    baseQuery,
    endpoints: ({ query }) => ({
        getFeatured: query<TFeaturedItem[], void>({
            query: () => '/featureds',
            transformResponse: featuredAdapter,
        }),
    }),
})

export const { useGetFeaturedQuery } = featuredApi
