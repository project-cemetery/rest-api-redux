import { Action } from 'redux-actions'
import { Collection, Entity, EntityLoadState as State } from '../model'

// Delete
export const createHandleDeleteRequest = <T extends Entity>() =>
    (state: State<T>, action: Action<{}>) => ({
        ...state,
        delete: {
            ...state.delete,
            loading: true,
        },
    })

export const createHandleDeleteSuccess = <T extends Entity>() =>
    (state: State<T>, action: Action<T>) => ({
        ...state,
        delete: {
            ...state.delete,
            loading: false,
            error: false,
        },
        entities: state.entities.filter((e) => e.id !== action.payload.id),
    })

export const createHandleDeleteFailure = <T extends Entity>() =>
    (state: State<T>, action: Action<{}>) => ({
        ...state,
        delete: {
            ...state.delete,
            loading: false,
            error: !!action.error,
        },
    })

// Get
export const createHandleGetRequest = <T extends Entity>() =>
    (state: State<T>, action: Action<{}>) => ({
        ...state,
        get: {
            ...state.get,
            loading: true,
        },
    })

export const createHandleGetSuccess = <T extends Entity>() =>
    (state: State<T>, action: Action<T>) => ({
        ...state,
        get: {
            ...state.get,
            loading: false,
            error: false,
        },
        entities: [
            ...state.entities.filter((e) => e.id !== action.payload.id),
            action.payload,
        ],
    })

export const createHandleGetFailure = <T extends Entity>() =>
    (state: State<T>, action: Action<{}>) => ({
        ...state,
        get: {
            ...state.get,
            loading: false,
            error: !!action.error,
        },
    })

export const createHandleGetListRequest = <T extends Entity>() =>
    (state: State<T>, action: Action<{}>) => ({
        ...state,
        getList: {
            ...state.getList,
            loading: true,
        },
    })

export const createHandleGetListSuccess = <T extends Entity>() =>
    (state: State<T>, action: Action<Collection<T>>) => ({
        ...state,
        getList: {
            ...state.getList,
            loading: false,
            error: false,
        },
        list: action.payload,
    })

export const createHandleGetListFailure = <T extends Entity>() =>
    (state: State<T>, action: Action<{}>) => ({
        ...state,
        getList: {
            ...state.getList,
            loading: false,
            error: !!action.error,
        },
    })

export const createHandlePostRequest = <T extends Entity>() =>
    (state: State<T>, action: Action<{}>) => ({
        ...state,
        post: {
            ...state.post,
            loading: true,
        },
    })

export const createHandlePostSuccess = <T extends Entity>() =>
    (state: State<T>, action: Action<T>) => ({
        ...state,
        post: {
            ...state.post,
            loading: false,
            error: false,
        },
        entities: [
            ...state.entities.filter((e) => e.id !== action.payload.id),
            action.payload,
        ],
    })

export const createHandlePostFailure = <T extends Entity>() =>
    (state: State<T>, action: Action<{}>) => ({
        ...state,
        post: {
            ...state.post,
            loading: false,
            error: !!action.error,
        },
    })

export const createHandlePutRequest = <T extends Entity>() =>
    (state: State<T>, action: Action<{}>) => ({
        ...state,
        put: {
            ...state.put,
            loading: true,
        },
    })

export const createHandlePutSuccess = <T extends Entity>() =>
    (state: State<T>, action: Action<T>) => ({
        ...state,
        put: {
            ...state.put,
            loading: false,
            error: false,
        },
        entities: [
            ...state.entities.filter((e) => e.id !== action.payload.id),
            action.payload,
        ],
    })

export const createHandlePutFailure = <T extends Entity>() =>
    (state: State<T>, action: Action<{}>) => ({
        ...state,
        put: {
            ...state.put,
            loading: false,
            error: !!action.error,
        },
    })
