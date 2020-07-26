import { createSlice } from '@reduxjs/toolkit'
import { Tag } from '../constraints'

export type SearchState = {
  tag: Tag
}

const initialState: SearchState = {
  tag: '',
}

export const empty: SearchState = {
  tag: '',
}

const State = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetSearch: () => ({ ...empty }),
    setSearch: (_: SearchState, { payload }) => ({ ...payload }),
  },
})

export default State.reducer

export const { resetSearch, setSearch } = State.actions
