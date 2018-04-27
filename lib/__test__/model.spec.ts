import {} from 'jest'
import { getInitialState } from '../model'

describe('getInitialState', () => {
    test('returns initial state', () => {
        expect(getInitialState()).toEqual({
            getList: { loading: false, error: false },
            get: { loading: false, error: false },
            post: { loading: false, error: false },
            put: { loading: false, error: false },
            delete: { loading: false, error: false },
            entities: [],
        })
    })
})
