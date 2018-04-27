import {} from 'jest'
import {
    createFailureActionCreator,
    createRequestActionCreator,
    createSuccessActionCreator,
} from '../commonActionCreators'

describe('createRequestActionCreator', () => {
    test('returns correct action', () => {
        const action = createRequestActionCreator('TestType')()

        expect(action).toEqual({ type: 'TestType' })
    })
})

describe('createSuccessActionCreator', () => {
    test('returns correct action', () => {
        const action = createSuccessActionCreator('TestType')({ name: 'Petro' })

        expect(action).toEqual({
            type: 'TestType',
            payload: {
                name: 'Petro',
            },
        })
    })
})

describe('createFailureActionCreator', () => {
    test('returns correct action', () => {
        const action = createFailureActionCreator('TestType')()

        expect(action).toEqual({
            type: 'TestType',
            error: true,
        })
    })
})
