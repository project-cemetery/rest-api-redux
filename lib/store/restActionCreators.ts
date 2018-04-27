import { Dispatch } from 'redux'
import { Actions, Collection, Entity, EntityLoadState, RestAction } from '../model'

export const createDelete = <AppState, T extends Entity>(
    actions: Actions<T>,
    getEntityState: (state: AppState) => EntityLoadState<T>,
    del: (id: number) => Promise<boolean>,
) => (id: number) => (dispatch: Dispatch<RestAction<T>>, getState: () => AppState) => {
    if (!getEntityState(getState()).delete.loading) {
        const { deleteRequest, deleteSuccess, deleteFailure } = actions

        dispatch(deleteRequest())

        return del(id)
            .then(
                (resposne) => dispatch(deleteSuccess(resposne)),
                (error)    => dispatch(deleteFailure()),
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

        dispatch(getRequest())

        return get(id)
            .then(
                (reponse) => dispatch(getSuccess(reponse)),
                (error)   => dispatch(getFailure()),
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

        dispatch(getListRequest())

        return getList(params)
            .then(
                (response) => dispatch(getListSuccess(response)),
                (error)      => dispatch(getListFailure()),
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

        dispatch(postRequest())

        return post(entity)
        .then(
            (response) => dispatch(postSuccess(response)),
            (error)    => dispatch(postFailure()),
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

        dispatch(putRequest())

        return put(entity)
            .then(
                (reponse) => dispatch(putSuccess(reponse)),
                (error)   => dispatch(putFailure()),
            )
    } else {
        return Promise.resolve()
    }
}
