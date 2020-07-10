import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import main from './main'
import routes from './routes'
import post from './post'

const reducer = combineReducers({
  main,
  routes,
  post,
})

const store = configureStore({ reducer })

export default store

// typeで使用
export * from './main'
export * from './routes'
export * from './post'
