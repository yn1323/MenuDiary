import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import main from './main'
import routes from './routes'
import post from './post'
import user from './user'
import tag from './tag'

const reducer = combineReducers({
  main,
  routes,
  post,
  user,
  tag,
})

// getDefaultMiddleware: serializeエラーがスマホで発生するため
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({ serializableCheck: false }),
})

export default store

// typeで使用
export * from './main'
export * from './routes'
export * from './post'
export * from './user'
export * from './tag'
