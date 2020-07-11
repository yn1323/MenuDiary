import { createSlice } from '@reduxjs/toolkit'

export type UserState = {
  id: string
  name: string
  icon: string
}

interface Payload {
  payload: {
    id?: string
    name?: string
    icon?: string
  }
}

const initialState: UserState = {
  id: 'idhoge',
  name: 'USERNAMEMEME',
  icon: 'iconUrl',
}

const State = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setUserInfo: (state: UserState, info: Payload) => ({
      ...state,
      ...{ ...info.payload },
    }),
  },
})

export default State.reducer

export const { setUserInfo } = State.actions
