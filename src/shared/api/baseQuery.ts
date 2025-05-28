import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseUrl = 'https://pvl-iv.ru/estatein/api'

export const baseQuery = fetchBaseQuery({ baseUrl })
