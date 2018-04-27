import {} from 'jest'
import { Entity, RestAction } from '../../model'
import {
    createDelete,
    createGet,
    createGetList,
    createPost,
    createPut,
} from '../restActionCreators'

const mockDispatch = <T extends Entity>(populatedActions: Array<RestAction<T>>) =>
    (action: RestAction<T>) => populatedActions.push(action)

describe('createDelete', () => {
    test('populate correct actions on success and not already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createDelete(
            {
                deleteRequest: () => 'request',
                deleteSuccess: () => 'success',
            } as any,
            (state: any) => ({ delete: { loading: false } } as any),
            (id: number) => Promise.resolve(true),
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([ 'request', 'success' ]))
    })

    test('populate correct actions on failure and not already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createDelete(
            {
                deleteRequest: () => 'request',
                deleteFailure: () => 'failure',
            } as any,
            (state: any) => ({ delete: { loading: false } } as any),
            (id: number) => Promise.reject(null),
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([ 'request', 'failure' ]))
    })

    test('populate correct actions on already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createDelete(
            {} as any,
            (state: any) => ({ delete: { loading: true } } as any),
            (id: number) => undefined,
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([]))
    })
})

describe('createGet', () => {
    test('populate correct actions on success and not already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createGet(
            {
                getRequest: () => 'request',
                getSuccess: () => 'success',
            } as any,
            (state: any) => ({ get: { loading: false } } as any),
            (id: number) => Promise.resolve(true) as any,
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([ 'request', 'success' ]))
    })

    test('populate correct actions on failure and not already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createGet(
            {
                getRequest: () => 'request',
                getFailure: () => 'failure',
            } as any,
            (state: any) => ({ get: { loading: false } } as any),
            (id: number) => Promise.reject(null) as any,
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([ 'request', 'failure' ]))
    })

    test('populate correct actions on already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createGet(
            {} as any,
            (state: any) => ({ get: { loading: true } } as any),
            (id: number) => undefined,
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([]))
    })
})

describe('createGetList', () => {
    test('populate correct actions on success and not already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createGetList(
            {
                getListRequest: () => 'request',
                getListSuccess: () => 'success',
            } as any,
            (state: any) => ({ getList: { loading: false } } as any),
            (id: number) => Promise.resolve(true) as any,
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([ 'request', 'success' ]))
    })

    test('populate correct actions on failure and not already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createGetList(
            {
                getListRequest: () => 'request',
                getListFailure: () => 'failure',
            } as any,
            (state: any) => ({ getList: { loading: false } } as any),
            (id: number) => Promise.reject(null) as any,
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([ 'request', 'failure' ]))
    })

    test('populate correct actions on already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createGetList(
            {} as any,
            (state: any) => ({ getList: { loading: true } } as any),
            (id: number) => undefined,
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([]))
    })
})

describe('createPost', () => {
    test('populate correct actions on success and not already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createPost(
            {
                postRequest: () => 'request',
                postSuccess: () => 'success',
            } as any,
            (state: any) => ({ post: { loading: false } } as any),
            (entity: any) => Promise.resolve(true) as any,
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([ 'request', 'success' ]))
    })

    test('populate correct actions on failure and not already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createPost(
            {
                postRequest: () => 'request',
                postFailure: () => 'failure',
            } as any,
            (state: any) => ({ post: { loading: false } } as any),
            (entity: any) => Promise.reject(null) as any,
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([ 'request', 'failure' ]))
    })

    test('populate correct actions on already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createPost(
            {} as any,
            (state: any) => ({ post: { loading: true } } as any),
            (entity: any) => undefined,
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([]))
    })
})

describe('createPut', () => {
    test('populate correct actions on success and not already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createPut(
            {
                putRequest: () => 'request',
                putSuccess: () => 'success',
            } as any,
            (state: any) => ({ put: { loading: false } } as any),
            (entity: any) => Promise.resolve(true) as any,
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([ 'request', 'success' ]))
    })

    test('populate correct actions on failure and not already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createPut(
            {
                putRequest: () => 'request',
                putFailure: () => 'failure',
            } as any,
            (state: any) => ({ put: { loading: false } } as any),
            (entity: any) => Promise.reject(null) as any,
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([ 'request', 'failure' ]))
    })

    test('populate correct actions on already loading', () => {
        const populatedActions = []

        const dispatch = mockDispatch(populatedActions)

        const promise = createPut(
            {} as any,
            (state: any) => ({ put: { loading: true } } as any),
            (entiyt: any) => undefined,
        )(1)(dispatch as any, () => ({}))

        return (promise as Promise<any>)
            .then(() => expect(populatedActions).toEqual([]))
    })
})
