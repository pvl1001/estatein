import axios, { AxiosInstance } from 'axios'

export const request: AxiosInstance = axios.create({
    baseURL: 'https://api.jsonserver.io',
    headers: {
        'X-Jsio-Token': '73fb93b51486c5d9aa3787cbbcf138af',
    },
})
