import {} from 'jest'
import { del, get, getList, post, put } from '../http'

jest.mock('axios')
import axios from 'axios'

const API_URL = 'api.url'
const ENTITY = 'entity'

describe('del', () => {
    test('return correct data', () => {
        const data = { id: 1 } as any

        (axios as any).delete.mockResolvedValue({ data })

        return del(API_URL, ENTITY, 1)
            .then((result) => expect(result).toEqual({ data }))
    })
})

describe('get', () => {
    test('return correct data', () => {
        const data = { id: 1 } as any

        (axios as any).get.mockResolvedValue({ data })

        return get(API_URL, ENTITY, 1)
            .then((result) => expect(result).toEqual({ data }))
    })
})

describe('getList', () => {
    test('return correct data', () => {
        const data = [{ id: 1 }] as any

        (axios as any).get.mockResolvedValue({ data })

        return getList(API_URL, ENTITY)
            .then((result) => expect(result).toEqual({ data }))
    })
})

describe('post', () => {
    test('return correct data', () => {
        const data = { id: 1 } as any

        (axios as any).post.mockResolvedValue({ data })

        return post(API_URL, ENTITY, data)
            .then((result) => expect(result).toEqual({ data }))
    })
})

describe('put', () => {
    test('return correct data', () => {
        const data = { id: 1 } as any

        (axios as any).put.mockResolvedValue({ data })

        return put(API_URL, ENTITY, 1, data)
            .then((result) => expect(result).toEqual({ data }))
    })
})
