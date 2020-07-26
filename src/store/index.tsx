import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import routes from './routes'
import post from './post'
import user from './user'
import edit from './edit'
import search from './search'

const reducer = combineReducers({
  routes,
  post,
  user,
  edit,
  search,
})

// getDefaultMiddleware: serializeエラーがスマホで発生するため
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({ serializableCheck: false }),
})

export default store

// typeで使用
export * from './routes'
export * from './post'
export * from './user'
export * from './edit'
export * from './search'
