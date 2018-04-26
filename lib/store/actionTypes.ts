const actionType = (entity: string) => (name: string) => `[rest-api-redux] ${entity}/${name}`

export const createActionTypes = (entity: string) => ({
    GET_LIST_REQUEST: actionType(entity)('GET_LIST_REQUEST'),
    GET_LIST_FAILURE: actionType(entity)('GET_LIST_FAILURE'),
    GET_LIST_SUCCESS: actionType(entity)('GET_LIST_SUCCESS'),

    GET_REQUEST: actionType(entity)('GET_REQUEST'),
    GET_FAILURE: actionType(entity)('GET_FAILURE'),
    GET_SUCCESS: actionType(entity)('GET_SUCCESS'),

    POST_REQUEST: actionType(entity)('POST_REQUEST'),
    POST_SUCCESS: actionType(entity)('POST_SUCCESS'),
    POST_FAILURE: actionType(entity)('POST_FAILURE'),

    PUT_REQUEST: actionType(entity)('PUT_REQUEST'),
    PUT_SUCCESS: actionType(entity)('PUT_SUCCESS'),
    PUT_FAILURE: actionType(entity)('PUT_FAILURE'),

    DELETE_REQUEST: actionType(entity)('DELETE_REQUEST'),
    DELETE_SUCCESS: actionType(entity)('DELETE_SUCCESS'),
    DELETE_FAILURE: actionType(entity)('DELETE_FAILURE'),
})
