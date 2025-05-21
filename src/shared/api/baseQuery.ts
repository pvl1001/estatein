import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseQuery = fetchBaseQuery({
    baseUrl: 'http://185.128.106.98:4000',
})
