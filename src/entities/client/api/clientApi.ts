import { baseQuery } from 'shared/api/baseQuery.ts'
import { TClient } from '../types.ts'
import { createApi } from '@reduxjs/toolkit/query/react'

export const clientApi = createApi({
    reducerPath: 'clientApi',
    baseQuery,
    endpoints: ({ query }) => ({
        getClients: query<TClient[], void>({
            query: () => '/clients',
        }),
    }),
})

export const { useGetClientsQuery } = clientApi
