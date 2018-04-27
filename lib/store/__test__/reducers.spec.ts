// tslint:disable:ordered-imports
import {} from 'jest'
import {
    createHandleDeleteFailure,  createHandleDeleteRequest, createHandleDeleteSuccess,
    createHandleGetFailure, createHandleGetRequest, createHandleGetSuccess,
    createHandleGetListFailure, createHandleGetListRequest, createHandleGetListSuccess,
    createHandlePostFailure, createHandlePostRequest, createHandlePostSuccess,
    createHandlePutFailure, createHandlePutRequest, createHandlePutSuccess,
} from '../reducers'

describe('handleDelete', () => {
    test('createHandleDeleteFailure', () => {
        const state = { delete: { loading: false, error: false } }

        const newState = createHandleDeleteFailure()(
            state as any,
            { error: true } as any,
        )

        expect(newState).toEqual({ delete: { loading: false, error: true } })
    })

    test('createHandleDeleteRequest', () => {
        const state = { delete: { loading: false, error: false } }

        const newState = createHandleDeleteRequest()(
            state as any,
            {} as any,
        )

        expect(newState).toEqual({ delete: { loading: true, error: false } })
    })

    test('createHandleDeleteSuccess', () => {
        const state = {
            delete: { loading: false, error: false },
            entities: [ { id: 12 }, { id: 13 } ],
        }

        const newState = createHandleDeleteSuccess()(
            state as any,
            { payload: { id: 13 } } as any,
        )

        expect(newState).toEqual({
            delete: { loading: false, error: false },
            entities: [ {id: 12 } ],
        })
    })
})

describe('handleGet', () => {
    test('createHandleGetFailure', () => {
        const state = { get: { loading: false, error: false } }

        const newState = createHandleGetFailure()(
            state as any,
            { error: true } as any,
        )

        expect(newState).toEqual({ get: { loading: false, error: true } })
    })

    test('createHandleGetRequest', () => {
        const state = { get: { loading: false, error: false } }

        const newState = createHandleGetRequest()(
            state as any,
            {} as any,
        )

        expect(newState).toEqual({ get: { loading: true, error: false } })
    })

    test('createHandleGetSuccess', () => {
        const state = {
            get: { loading: false, error: false },
            entities: [ { id: 12 }, { id: 13 } ],
        }

        const newState = createHandleGetSuccess()(
            state as any,
            { payload: { id: 14 } } as any,
        )

        expect(newState).toEqual({
            get: { loading: false, error: false },
            entities: [ { id: 12 }, { id: 13 }, { id: 14 } ],
        })
    })
})

describe('handleGetList', () => {
    test('createHandleGetListFailure', () => {
        const state = { getList: { loading: false, error: false } }

        const newState = createHandleGetListFailure()(
            state as any,
            { error: true } as any,
        )

        expect(newState).toEqual({ getList: { loading: false, error: true } })
    })

    test('createHandleGetListRequest', () => {
        const state = { getList: { loading: false, error: false } }

        const newState = createHandleGetListRequest()(
            state as any,
            {} as any,
        )

        expect(newState).toEqual({ getList: { loading: true, error: false } })
    })

    test('createHandleGetListSuccess', () => {
        const state = {
            getList: { loading: false, error: false },
        }

        const newState = createHandleGetListSuccess()(
            state as any,
            { payload: { member: [ { id: 14 } ] } } as any,
        )

        expect(newState).toEqual({
            getList: { loading: false, error: false },
            list: { member: [ { id: 14 } ] },
        })
    })
})

describe('handlePost', () => {
    test('createHandlePostFailure', () => {
        const state = { post: { loading: false, error: false } }

        const newState = createHandlePostFailure()(
            state as any,
            { error: true } as any,
        )

        expect(newState).toEqual({ post: { loading: false, error: true } })
    })

    test('createHandlePostRequest', () => {
        const state = { post: { loading: false, error: false } }

        const newState = createHandlePostRequest()(
            state as any,
            {} as any,
        )

        expect(newState).toEqual({ post: { loading: true, error: false } })
    })

    test('createHandlePostSuccess', () => {
        const state = {
            post: { loading: false, error: false },
            entities: [ { id: 12 }, { id: 13 } ],
        }

        const newState = createHandlePostSuccess()(
            state as any,
            { payload: { id: 14 } } as any,
        )

        expect(newState).toEqual({
            post: { loading: false, error: false },
            entities: [ { id: 12 }, { id: 13 }, { id: 14 } ],
        })
    })
})

describe('handlePut', () => {
    test('createHandlePutFailure', () => {
        const state = { put: { loading: false, error: false } }

        const newState = createHandlePutFailure()(
            state as any,
            { error: true } as any,
        )

        expect(newState).toEqual({ put: { loading: false, error: true } })
    })

    test('createHandlePutRequest', () => {
        const state = { put: { loading: false, error: false } }

        const newState = createHandlePutRequest()(
            state as any,
            {} as any,
        )

        expect(newState).toEqual({ put: { loading: true, error: false } })
    })

    test('createHandlePutSuccess', () => {
        const state = {
            put: { loading: false, error: false },
            entities: [ { id: 12 }, { id: 13, name: 'old' } ],
        }

        const newState = createHandlePutSuccess()(
            state as any,
            { payload: { id: 13, name: 'new' } } as any,
        )

        expect(newState).toEqual({
            put: { loading: false, error: false },
            entities: [ { id: 12 }, { id: 13, name: 'new' } ],
        })
    })
})
