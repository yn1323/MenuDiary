import { createSlice } from '@reduxjs/toolkit'
import { Tag } from '../constraints'

export type EditState = {
  id: string
  title: string
  tag: Tag
  regDate: string
  uri: string
  comment: string
}

export const empty: EditState = {
  id: '',
  uri: '',
  title: '',
  tag: '',
  comment: '',
  regDate: '',
}

const initialState: EditState = {
  ...empty,
}

const State = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    resetEdit: () => ({ ...empty }),
    setEdit: (_: EditState, { payload }) => ({ ...payload }),
  },
})

export default State.reducer

export const { resetEdit, setEdit } = State.actions
