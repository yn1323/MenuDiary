import { createSlice } from '@reduxjs/toolkit'

export type UserState = {
  id: string
  name: string
  icon: string
}

interface Payload {
  action: {
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
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state: UserState, { action }: Payload) => ({
      ...state,
      ...{ ...action },
    }),
  },
})

export default State.reducer

export const { setUserInfo } = State.actions
