import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import main from './main'
import routes from './routes'

const reducer = combineReducers({
  main,
  routes,
})

const store = configureStore({ reducer })

export default store

export * from './main'
export * from './routes'
