import { createSlice } from '@reduxjs/toolkit'
import { Tag } from '../constraints'
import uuid from '../helpers/uuid'

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

export const createNewPost = (): EditState => ({ ...empty, id: uuid() })

const initialState: EditState = {
  ...empty,
}

const State = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    resetEdit: () => ({ ...empty }),
    setEdit: (state: EditState, { payload }) => ({ ...state, ...payload }),
  },
})

export default State.reducer

export const { resetEdit, setEdit } = State.actions
