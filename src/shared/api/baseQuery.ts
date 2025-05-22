import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseUrl = 'http://pvl-iv.ru:4000'

export const baseQuery = fetchBaseQuery({ baseUrl })
