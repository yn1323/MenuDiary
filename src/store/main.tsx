import { createSlice } from '@reduxjs/toolkit'

export type MainState = {
  isConfig: boolean
}

const initialState: MainState = {
  isConfig: true,
}

const State = createSlice({
  name: 'store',
  initialState,
  reducers: {
    makeTrue: (state: MainState): MainState => ({
      ...state,
      isConfig: true,
    }),
    makeFalse: (state: MainState): MainState => ({
      ...state,
      isConfig: false,
    }),
  },
})

export default State.reducer

export const { makeTrue, makeFalse } = State.actions
