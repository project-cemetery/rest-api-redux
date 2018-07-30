[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/igorkamyshev/rest-api-redux.svg?branch=master)](https://travis-ci.org/igorkamyshev/rest-api-redux)
[![npm version](https://badge.fury.io/js/rest-api-redux.svg)](https://badge.fury.io/js/rest-api-redux)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8efde772eee74b78a398a81564ba695d)](https://www.codacy.com/project/igorkamyshev/rest-api-redux/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=igorkamyshev/rest-api-redux&amp;utm_campaign=Badge_Grade_Dashboard)

# rest-api-redux

Simple integration REST API with Redux

## Instalations

`yarn add rest-api-redux`

## Usage in JS

```js
// utils/redux.js

import { createActionCreators, createReducers } from 'rest-api-redux'

export const actionCreators = createActionCreators(
    'https://api.mysite.com/rest',
    entity => ({
        ...entity,
        fetchedAt: Date.now(),
    }), // transform entity
    response => response.data['members'], // get memebers from list response
    response => parseInt(response.data['totalItems'], 10), // get memebers from list response
)

export const reducers = createReducers()
```

```js
// store/articles.js

import { getInitialState } from 'rest-api-redux'
import { handleActions } from 'redux-actions'

import {
    actionCreators as createActionCreators,
    reducers as createReducers,
} from 'utils/redux'

const ENTITY_NAME = 'articles' // rest entity name — https://api.mysite.com/rest/articles
 
// actions

const restActionCreators = createActionCreators(
    ENTITY_NAME,
    state => state.articles, // get state fragment
)

export const actionCreators = {
    ...restActionCreators,
}

// reducers

const restReducers = createReducers(ENTITY_NAME)

export const reducers = handleActions(
    { ...restReducers },
    { ...getInitialState() },
)
```

Great! You can use `actionCreators` and `reducers` in your app.

## Usage in TS

```ts
// utils/redux.js

import { createActionCreators, createReducers } from 'rest-api-redux'

export const actionCreators = createActionCreators(
    'https://api.mysite.com/rest',
    (entity: any) => ({
        ...entity,
        fetchedAt: Date.now(),
    }), // transform entity
    (response: any) => response.data['members'], // get memebers from list response
    (response: any) => parseInt(response.data['totalItems'], 10), // get memebers from list response
)

export const reducers = createReducers()
```

```ts
// store/articles.js

import { getInitialState, Entity, EntityLoadState } from 'rest-api-redux'
import { handleActions } from 'redux-actions'

import {
    actionCreators as createActionCreators,
    reducers as createReducers,
} from 'utils/redux'

import { AppState } from 'reducers' // interface of your state

const ENTITY_NAME = 'articles' // rest entity name — https://api.mysite.com/rest/articles
 
// interfaces

export interface Article extends Entity {
    title: string
    // ...
}

export interface ArticlesState extends EntityLoadState<Article> {
}

// actions

const restActionCreators = createActionCreators<AppState, Article>(
    ENTITY_NAME,
    (state: AppState) => state.articles, // get state fragment
)

export const actionCreators = {
    ...restActionCreators,
}

// reducers

const restReducers = createReducers<Article>(ENTITY_NAME)

export const reducers = handleActions(
    { ...restReducers } as any,
    { ...getInitialState<Article>() },
)
```

Great! You can use `actionCreators`, `reducers` and interfaces in your app.

## Examples

Projects uses `rest-api-redux`:
+ [Numidium](https://github.com/TheNovel/Numidium)
