import { createSlice } from '@reduxjs/toolkit'

export type PostState = {
  id: number
  title: string
  tag: string
  regDate: string
  img: string
  comment: string
}

const initialState: PostState = {
  id: 2,
  title: '肉じゃが',
  tag: '定番',
  regDate: '2020/07/10',
  img: 'hogeho',
  comment: 'remarksbbbaaa',
}

const State = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost: (state: PostState) => {
      console.log(state)
      // alert('aa')

      return { ...state }
    },
    delPost: (): PostState => ({
      ...initialState,
    }),
  },
})

export default State.reducer

export const { setPost, delPost } = State.actions
