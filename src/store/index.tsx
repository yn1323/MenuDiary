import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import main from './main'

const reducer = combineReducers({
  main,
})

const store = configureStore({ reducer })

export default store
