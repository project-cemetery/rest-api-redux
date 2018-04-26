import {} from 'jest'
import { createActionTypes } from '../actionTypes'

describe('createTypes', () => {
    test('returns correct types', () => {
        const types = createActionTypes('TestType')

        expect(types).toEqual({
            GET_LIST_REQUEST: '[rest-api-redux] TestType/GET_LIST_REQUEST',
            GET_LIST_FAILURE: '[rest-api-redux] TestType/GET_LIST_FAILURE',
            GET_LIST_SUCCESS: '[rest-api-redux] TestType/GET_LIST_SUCCESS',

            GET_REQUEST: '[rest-api-redux] TestType/GET_REQUEST',
            GET_FAILURE: '[rest-api-redux] TestType/GET_FAILURE',
            GET_SUCCESS: '[rest-api-redux] TestType/GET_SUCCESS',

            POST_REQUEST: '[rest-api-redux] TestType/POST_REQUEST',
            POST_SUCCESS: '[rest-api-redux] TestType/POST_SUCCESS',
            POST_FAILURE: '[rest-api-redux] TestType/POST_FAILURE',

            PUT_REQUEST: '[rest-api-redux] TestType/PUT_REQUEST',
            PUT_SUCCESS: '[rest-api-redux] TestType/PUT_SUCCESS',
            PUT_FAILURE: '[rest-api-redux] TestType/PUT_FAILURE',

            DELETE_REQUEST: '[rest-api-redux] TestType/DELETE_REQUEST',
            DELETE_SUCCESS: '[rest-api-redux] TestType/DELETE_SUCCESS',
            DELETE_FAILURE: '[rest-api-redux] TestType/DELETE_FAILURE',
        })
    })
})
