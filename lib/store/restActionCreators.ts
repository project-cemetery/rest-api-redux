import { Dispatch } from 'redux'
import { Actions, Collection, Entity, EntityLoadState, RestAction } from '../model'

// For nullable action creators
const createAction = <T extends Entity>(actionCreator?: (params?: any) => any, params?: any) =>
    (!!actionCreator && actionCreator(params)) as RestAction<T>

export const createDelete = <AppState, T extends Entity>(
    actions: Actions<T>,
    getEntityState: (state: AppState) => EntityLoadState<T>,
    del: (id: number) => Promise<boolean>,
) => (id: number) => (dispatch: Dispatch<RestAction<T>>, getState: () => AppState) => {
    if (!getEntityState(getState()).delete.loading) {
        const { deleteRequest, deleteSuccess, deleteFailure } = actions

        dispatch(createAction(deleteRequest))

        return del(id)
            .then(
                (resposne) => dispatch(createAction(deleteSuccess, { id } as T)), // Dirty hack
                (error)    => dispatch(createAction(deleteFailure)),
            )
    } else {
        return Promise.resolve()
    }
}

export const createGet = <AppState, T extends Entity>(
    actions: Actions<T>,
    getEntityState: (state: AppState) => EntityLoadState<T>,
    get: (params?: any) => Promise<T>,
) => (id: number) => (dispatch: Dispatch<RestAction<T>>, getState: () => AppState) => {
    if (!getEntityState(getState()).get.loading) {
        const { getRequest, getSuccess, getFailure } = actions

        dispatch(createAction(getRequest))

        return get(id)
            .then(
                (reponse) => dispatch(createAction(getSuccess, reponse)),
                (error)   => dispatch(createAction(getFailure)),
            )
    } else {
        return Promise.resolve()
    }
}

export const createGetList = <AppState, T extends Entity>(
    actions: Actions<T>,
    getEntityState: (state: AppState) => EntityLoadState<T>,
    getList: (params?: any) => Promise<Collection<T>>,
) => (params?: any) => (dispatch: Dispatch<RestAction<T>>, getState: () => AppState) => {
    if (!getEntityState(getState()).getList.loading) {
        const { getListRequest, getListSuccess, getListFailure } = actions

        dispatch(createAction(getListRequest))

        return getList(params)
            .then(
                (response) => dispatch(createAction(getListSuccess, response)),
                (error)    => dispatch(createAction(getListFailure)),
            )
    } else {
        return Promise.resolve()
    }
}

export const createPost = <AppState, T extends Entity>(
    actions: Actions<T>,
    getEntityState: (state: AppState) => EntityLoadState<T>,
    post: (entity: T) => Promise<T>,
) => (entity: T) => (dispatch: Dispatch<RestAction<T>>, getState: () => AppState) => {
    if (!getEntityState(getState()).post.loading) {
        const { postRequest, postSuccess, postFailure } = actions

        dispatch(createAction(postRequest))

        return post(entity)
        .then(
            (response) => dispatch(createAction(postSuccess, response)),
            (error)    => dispatch(createAction(postFailure)),
        )
    } else {
        return Promise.resolve()
    }
}

export const createPut = <AppState, T extends Entity>(
    actions: Actions<T>,
    getEntityState: (state: AppState) => EntityLoadState<T>,
    put: (entity: T) => Promise<T>,
) => (entity: T) => (dispatch: Dispatch<RestAction<T>>, getState: () => AppState) => {
    if (!getEntityState(getState()).put.loading) {
        const { putRequest, putSuccess, putFailure } = actions

        dispatch(createAction(putRequest))

        return put(entity)
            .then(
                (reponse) => dispatch(createAction(putSuccess, reponse)),
                (error)   => dispatch(createAction(putFailure)),
            )
    } else {
        return Promise.resolve()
    }
}
