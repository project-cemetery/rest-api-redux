import {} from 'jest'
import { encodeQuery, objectToParameters } from '../utils'

describe('`encodeQuery` works right', () => {
    test('with empty array should return empty string ', () => {
        expect(encodeQuery([])).toEqual('')
    })

    test('with one param should return encoded string ', () => {
        const params = [
            { key: 'search', value: 'myfirststring' },
        ]

        expect(encodeQuery(params)).toEqual('?search=myfirststring')
    })

    test('with two param should return encoded string ', () => {
        const params = [
            { key: 'search', value: 'myfirststring' },
            { key: 'page', value: '1' },
        ]

        expect(encodeQuery(params)).toEqual('?search=myfirststring&page=1')
    })
})

describe('`objectToParameters` works right', () => {
    test('with empty object should return empty array', () => {
        expect(objectToParameters({})).toEqual([])
    })

    test('with simple should return array', () => {
        const obj = { page: 1 }

        expect(objectToParameters(obj)).toEqual([{ key: 'page', value: '1' }])
    })

    test('with complex should return broken array', () => {
        const obj = { page: { number: 1 } }

        expect(objectToParameters(obj)).toEqual([{ key: 'page', value: '[object Object]' }])
    })
})
