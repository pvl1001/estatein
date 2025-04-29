import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.jsonserver.io',
    prepareHeaders: (headers) => {
        headers.set('X-Jsio-Token', '73fb93b51486c5d9aa3787cbbcf138af')
        return headers
    },
})
