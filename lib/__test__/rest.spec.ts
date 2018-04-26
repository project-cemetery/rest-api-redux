import {} from 'jest'
import { createDelete, createGet, createGetList, createPost, createPut } from '../rest'

jest.mock('axios')
import axios from 'axios'

const API_URL = 'api.url'
const ENTITY = 'entity'

describe('createDelete', () => {
    test('return correct data', () => {
        const data = { id: 1 } as any

        (axios as any).delete.mockResolvedValue({ data })

        return createDelete(API_URL)(ENTITY)(1)
            .then((result) => expect(result).toEqual(true))
    })
})

describe('createGet', () => {
    test('return correct data', () => {
        const data = { obj: 1 } as any

        (axios as any).get.mockResolvedValue({ data })

        return createGet(API_URL, (obj) => ({ id: obj.obj }))(ENTITY)(1)
            .then((result) => expect(result).toEqual({ id: 1 }))
    })

    test('return correct data with default callback', () => {
        const data = { id: 1 } as any

        (axios as any).get.mockResolvedValue({ data })

        return createGet(API_URL)(ENTITY)(1)
            .then((result) => expect(result).toEqual({ id: 1 }))
    })
})

describe('createGetList', () => {
    test('return correct data', () => {
        const data = { member: [ 1, 2 ], total: 45 } as any

        (axios as any).get.mockResolvedValue({ data })

        return createGetList(
            API_URL,
            (response) => response.data.member,
            (response) => response.data.total,
            (obj) => ({ id: obj as number }),
        )(ENTITY)()
            .then((result) => expect(result).toEqual({
                id: 0,
                member: [ { id: 1 }, { id: 2 } ],
                totalItems: 45,
            }))
    })

    test('return correct data with default callback', () => {
        const data = { member: [ { id: 1 }, { id: 2 } ], total: 45 } as any

        (axios as any).get.mockResolvedValue({ data })

        return createGetList(
            API_URL,
            (response) => response.data.member,
            (response) => response.data.total,
        )(ENTITY)()
            .then((result) => expect(result).toEqual({
                id: 0,
                member: [ { id: 1 }, { id: 2 } ],
                totalItems: 45,
            }))
    })
})

describe('createPost', () => {
    test('return correct data', () => {
        const data = { id: 1 } as any

        (axios as any).post.mockResolvedValue({ data })

        return createPost(API_URL, (obj) => ({ id: obj.id }))(ENTITY)(data)
            .then((result) => expect(result).toEqual({ id: 1 }))
    })

    test('return correct data with default callback', () => {
        const data = { id: 1 } as any

        (axios as any).post.mockResolvedValue({ data })

        return createPost(API_URL)(ENTITY)(data)
            .then((result) => expect(result).toEqual({ id: 1 }))
    })
})

describe('createPut', () => {
    test('return correct data', () => {
        const data = { id: 1 } as any

        (axios as any).put.mockResolvedValue({ data })

        return createPut(
            API_URL,
            (obj) => obj.id,
            (obj) => ({ id: obj.id }),
        )(ENTITY)(data)
            .then((result) => expect(result).toEqual({ id: 1 }))
    })

    test('return correct data with default callback', () => {
        const data = { id: 1 } as any

        (axios as any).put.mockResolvedValue({ data })

        return createPut(
            API_URL,
            (obj) => obj.id,
        )(ENTITY)(data)
            .then((result) => expect(result).toEqual({ id: 1 }))
    })
})
