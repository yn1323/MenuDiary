import { createSlice } from '@reduxjs/toolkit'

export type EditState = {
  id: string
  title: string
  tag: string
  regDate: string
  uri: string
  comment: string
}

const initialState: EditState = {
  id: '5',
  uri: 'https://facebook.github.io/react-native/img/header_logo.png',
  title: 'メニュー名EDIT',
  tag: '肉のおかず',
  comment: 'dasjdsahdksahfahla',
  regDate: '2020-07-15',
}

export const empty: EditState = {
  id: '',
  uri: '',
  title: '',
  tag: '',
  comment: '',
  regDate: '',
}

const State = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    reset: () => ({ ...empty }),
    setEdit: (_: EditState, { payload }) => ({ ...payload }),
  },
})

export default State.reducer

export const { reset, setEdit } = State.actions
