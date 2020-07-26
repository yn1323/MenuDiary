import { createSlice } from '@reduxjs/toolkit'
import { Tag } from '../constraints'

export type PostState = {
  id: string
  title: string
  tag: Tag
  regDate: string
  uri: string
  comment: string
}

const initialState: PostState[] = [
  {
    id: '1',
    uri: 'https://facebook.github.io/react-native/img/header_logo.png',
    title: 'メニュー名1',
    tag: 'ご飯もの',
    comment: 'aaa',
    regDate: '2020-07-10',
  },
  {
    id: '2',
    uri: 'https://facebook.github.io/react-native/img/header_logo.png',
    title: 'メニューdsadasd名2',
    tag: 'その他',
    comment: 'bbb',
    regDate: '2020-07-12',
  },
  {
    id: '3',
    uri: 'https://facebook.github.io/react-native/img/header_logo.png',
    title: 'メニュdsaddddddddddddー名3',
    tag: 'その他',
    comment: 'ccc',
    regDate: '2020-07-13',
  },
  {
    id: '4',
    uri: 'https://facebook.github.io/react-native/img/header_logo.png',
    title: 'メニュー名4',
    tag: '乳製品のおかず',
    comment: 'dddd',
    regDate: '2020-07-14',
  },
  {
    id: '5',
    uri: 'https://facebook.github.io/react-native/img/header_logo.png',
    title: 'メニュー名5',
    tag: '定番',
    comment: 'eeeeee',
    regDate: '2020-07-15',
  },
]

const State = createSlice({
  name: 'post',
  initialState,
  reducers: {
    // setPost: (state: PostState) => {
    //   console.log(state)
    //   // alert('aa')
    //   return { ...state }
    // },
    // delPost: (): PostState => ({
    //   ...initialState,
    // }),
  },
})

export default State.reducer

// export const { setPost, delPost } = State.actions
