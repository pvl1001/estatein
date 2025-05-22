import axios, { AxiosInstance } from 'axios'
import { baseUrl } from './baseQuery.ts'

export const request: AxiosInstance = axios.create({
    baseURL: baseUrl,
})
