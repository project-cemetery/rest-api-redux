import { AxiosPromise, AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { Action } from 'redux-actions'

import { Actions, ActionTypes, Collection, Entity, EntityLoadState, PartialState } from './model'
import { createDelete, createGet, createGetList, createPost, createPut } from './rest'
import { createActionTypes } from './store/actionTypes'
import * as commonCreator from './store/commonActionCreators'
import * as reducer from './store/reducers'
import * as restAction from './store/restActionCreators'

export const createReducers = (
) => <T extends Entity>(
    entity: string,
) => {
    const types = createActionTypes(entity)

    return {
        [types.GET_LIST_REQUEST]: reducer.createHandleGetListRequest<T>(),
        [types.GET_LIST_SUCCESS]: reducer.createHandleGetListSuccess<T>(),
        [types.GET_LIST_FAILURE]: reducer.createHandleGetListFailure<T>(),

        [types.GET_REQUEST]: reducer.createHandleGetRequest<T>(),
        [types.GET_SUCCESS]: reducer.createHandleGetSuccess<T>(),
        [types.GET_FAILURE]: reducer.createHandleGetFailure<T>(),

        [types.POST_REQUEST]: reducer.createHandlePostRequest<T>(),
        [types.POST_SUCCESS]: reducer.createHandlePostSuccess<T>(),
        [types.POST_FAILURE]: reducer.createHandlePostFailure<T>(),

        [types.PUT_REQUEST]: reducer.createHandlePutRequest<T>(),
        [types.PUT_SUCCESS]: reducer.createHandlePutSuccess<T>(),
        [types.PUT_FAILURE]: reducer.createHandlePutFailure<T>(),

        [types.DELETE_REQUEST]: reducer.createHandleDeleteRequest<T>(),
        [types.DELETE_SUCCESS]: reducer.createHandleDeleteSuccess<T>(),
        [types.DELETE_FAILURE]: reducer.createHandleDeleteFailure<T>(),
    }
}

export const createActionCreators = (
    apiUrl: string,
    transformEntity: (entity: any) => any,
    getMember: (response: AxiosResponse<any>) => any[],
    getTotal: (response: AxiosResponse<any>) => number,
) => <AppState, T extends Entity>(
    entity: string,
    getEntityState: (state: AppState) => EntityLoadState<T>,
) => {
    const types = createActionTypes(entity)

    const commonActions = {
        // List
        getListRequest: commonCreator.createRequestActionCreator(types.GET_LIST_REQUEST),
        getListSuccess: commonCreator.createSuccessActionCreator<Collection<T>>(types.GET_LIST_SUCCESS),
        getListFailure: commonCreator.createFailureActionCreator(types.GET_LIST_FAILURE),

        // Get
        getRequest: commonCreator.createRequestActionCreator(types.GET_REQUEST),
        getSuccess: commonCreator.createSuccessActionCreator<T>(types.GET_SUCCESS),
        getFailure: commonCreator.createFailureActionCreator(types.GET_FAILURE),

        // Post
        postRequest: commonCreator.createRequestActionCreator(types.POST_REQUEST),
        postSuccess: commonCreator.createSuccessActionCreator<T>(types.POST_SUCCESS),
        postFailure: commonCreator.createFailureActionCreator(types.POST_FAILURE),

        // Put
        putRequest: commonCreator.createRequestActionCreator(types.PUT_REQUEST),
        putSuccess: commonCreator.createSuccessActionCreator<T>(types.PUT_SUCCESS),
        putFailure: commonCreator.createFailureActionCreator(types.PUT_FAILURE),

        // Delete
        deleteRequest: commonCreator.createRequestActionCreator(types.DELETE_REQUEST),
        deleteSuccess: commonCreator.createSuccessActionCreator<T>(types.DELETE_SUCCESS),
        deleteFailure: commonCreator.createFailureActionCreator(types.DELETE_FAILURE),
    } as Actions<T>

    return {
        ...commonActions,

        // REST
        getList: restAction.createGetList(
            commonActions, getEntityState,
            createGetList(apiUrl, getMember, getTotal, transformEntity)<T>(entity),
        ),
        get: restAction.createGet(
            commonActions, getEntityState,
            createGet(apiUrl, transformEntity)<T>(entity),
        ),
        post: restAction.createPost(
            commonActions, getEntityState,
            createPost(apiUrl, transformEntity)<T>(entity),
        ),
        put: restAction.createPut(
            commonActions, getEntityState,
            createPut(apiUrl, transformEntity)<T>(entity),
        ),
        delete: restAction.createDelete(
            commonActions, getEntityState,
            createDelete(apiUrl)<T>(entity),
        ),
    }
}

export {
    Actions,
    Entity, Collection,
    EntityLoadState,
    getInitialState,
} from './model'
