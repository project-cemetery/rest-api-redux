import { Action } from 'redux-actions'

export interface Entity {
    id: number
}

export interface Collection<T> extends Entity {
    member: T[]
    totalItems: number
}

export interface ActionTypes {
    GET_LIST_REQUEST: string
    GET_LIST_FAILURE: string
    GET_LIST_SUCCESS: string

    GET_REQUEST: string
    GET_FAILURE: string
    GET_SUCCESS: string

    POST_REQUEST: string
    POST_FAILURE: string
    POST_SUCCESS: string

    PUT_REQUEST: string
    PUT_FAILURE: string
    PUT_SUCCESS: string

    DELETE_REQUEST: string
    DELETE_FAILURE: string
    DELETE_SUCCESS: string
}

export type RestAction<T extends Entity> = Action<{}> | Action<T> | Action<Collection<T>>

export interface Actions<T extends Entity> {
    getListRequest?: () => Action<{}>,
    getListSuccess?: (collection: Collection<T>) => Action<Collection<T>>,
    getListFailure?: () => Action<{}>,

    getRequest?: () => Action<{}>,
    getSuccess?: (object: T) => Action<T>,
    getFailure?: () => Action<{}>,

    postRequest?: () => Action<{}>,
    postSuccess?: (object: T) => Action<T>,
    postFailure?: () => Action<{}>,

    putRequest?: () => Action<{}>,
    putSuccess?: (object: T) => Action<T>,
    putFailure?: () => Action<{}>,

    deleteRequest?: () => Action<{}>,
    deleteSuccess?: (object: T) => Action<T>,
    deleteFailure?: () => Action<{}>,

    getList?: (params?: any) => Promise<Collection<T>>
    get?: (id: number) => Promise<T>
    post?: (object: T) => Promise<T>
    put?: (object: T) => Promise<T>
}

export interface PartialState {
    loading: boolean
    error: boolean
}

export interface EntityLoadState<T extends Entity> {
    getList: PartialState
    get: PartialState
    post: PartialState
    put: PartialState
    delete: PartialState

    list?: Collection<T>
    entities: T[]
}

const getInitialPartialState = () => ({ loading: false, error: false })

export const getInitialState = <T extends Entity>() => ({
    getList:  getInitialPartialState() as PartialState,
    get:      getInitialPartialState() as PartialState,
    post:     getInitialPartialState() as PartialState,
    put:      getInitialPartialState() as PartialState,
    delete:   getInitialPartialState() as PartialState,
    entities: [],
} as EntityLoadState<T>)
