import { Action } from 'redux-actions'
import { Entity } from '../model'

export const createRequestActionCreator = (type: string) =>
    () => ({ type } as Action<{}>)

export const createSuccessActionCreator = <T extends Entity>(type: string) =>
    (entity: T) => ({
        type,
        payload: entity,
    } as Action<T>)

export const createFailureActionCreator = (type: string) =>
    () => ({
        type,
        error: true,
    } as Action<{}>)
