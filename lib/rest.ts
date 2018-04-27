import { AxiosResponse } from 'axios'

import { del, get, getList, post, put } from './http'
import { Collection, Entity } from './model'

const defaultTransform = (entity) => entity

export const createDelete = (apiUrl: string) => <T extends Entity>(enityName: string) =>
    (id: number) => del(apiUrl, enityName, id)
        .then((response) => true)

export const createGet = (
    apiUrl: string,
    transformEntity: (entity: any) => any = defaultTransform,
) => <T extends Entity>(entityName: string) =>
    (id: number) => get(apiUrl, entityName, id)
        .then((response) => transformEntity(response.data))

export const createGetList = (
    apiUrl: string, getMember: (response: AxiosResponse<any>) => any[],
    getTotal: (response: AxiosResponse<any>) => number,
    transformEntity: (entity: any) => any = defaultTransform,
) => <T extends Entity>(entityName: string) =>
    (params?: any) => getList(apiUrl, entityName, params)
        .then((response) => ({
            id: 0, // Collection hasn't id
            member: getMember(response).map(transformEntity),
            totalItems: getTotal(response),
        }))

export const createPost = (
    apiUrl: string,
    transformEntity: (entity: any) => any = defaultTransform,
) => <T extends Entity>(entityName: string) =>
    (entity: T) => post(apiUrl, entityName, entity)
        .then((response) => transformEntity(response.data))

export const createPut = (
    apiUrl: string,
    transformEntity: (entity: any) => any = defaultTransform,
) => <T extends Entity>(entityName: string) =>
    (entity: T) => put(apiUrl, entityName, entity.id, entity)
        .then((response) => transformEntity(response.data))
