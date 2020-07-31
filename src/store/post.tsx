import { createSlice } from '@reduxjs/toolkit'
import { orderPost } from '../helpers/common'
import { Tag } from '../constraints'
import { getPost, insertPost, deletePost } from '../server/storage'

export type PostState = {
  id: string
  title: string
  tag: Tag
  regDate: string
  uri: string
  comment: string
}

interface SetPostAction {
  type: string
  payload: PostState[]
}

type FixPostAction = {
  type: string
  payload: PostState
}
type DelPostAction = {
  type: string
  payload: {
    id: string
  }
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
    setPost: (_: PostState[], { payload }: SetPostAction) =>
      orderPost([...payload]),

    fixPost: (state: PostState[], { payload }: FixPostAction) =>
      orderPost([...state.filter((e) => e.id !== payload.id), payload]),
    delPost: (state: PostState[], { payload }: DelPostAction) =>
      orderPost([...state.filter((e) => e.id !== payload.id)]),
  },
})

export default State.reducer

export const { setPost, fixPost, delPost } = State.actions

export const fetchPost = () => async (dispatch: any) => {
  try {
    const res = await getPost()
    // 非同期処理の中で定義した Action Creator を呼び出すことができる
    dispatch(setPost(res))
  } catch (err) {
    console.log('No Data Found??')
    console.error(err)
  }
}

export const addPost = (post: PostState) => async (dispatch: any) => {
  try {
    await insertPost(post)
    dispatch(fixPost(post))
  } catch (err) {}
}

export const removePost = (id: string) => async (dispatch: any) => {
  try {
    await deletePost(id)
    dispatch(delPost({ id }))
  } catch (err) {}
}
