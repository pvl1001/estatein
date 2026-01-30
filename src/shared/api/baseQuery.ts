import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseUrl = 'https://pvl-iv.ru/api/estatein'

export const baseQuery = fetchBaseQuery({ baseUrl })
