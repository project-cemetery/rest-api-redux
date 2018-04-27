import axios, { AxiosPromise } from 'axios'

import { encodeQuery, objectToParameters } from './utils'

export const getList = (apiUrl: string, entity: string, params?: any) =>
    axios.get(`${apiUrl}/${entity}${encodeQuery(objectToParameters(params))}`)

export const get = (apiUrl: string, entity: string, id: number) =>
    axios.get(`${apiUrl}/${entity}/${id}`)

export const post = (apiUrl: string, entity: string, data: any) =>
    axios.post(`${apiUrl}/${entity}`, data)

export const put = (apiUrl: string, entity: string, id: number, data: any) =>
    axios.put(`${apiUrl}/${entity}/${id}`, data)

export const del = (apiUrl: string, entity: string, id: number) =>
    axios.delete(`${apiUrl}/${entity}/${id}`)
