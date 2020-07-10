import { createSlice } from '@reduxjs/toolkit'

export type Ingredients = {
  ingredient: string
  amount: number | string // 1杯、小さじなどがあるため
  unit: string | null // 単位
}

export type PostState = {
  id: number
  title: string
  tags: string[]
  regDate: string
  img: string
  ingredients: Ingredients[]
  recipe: string[]
  comment: string
}

// const initialState: PostState = {
//   id: 1,
//   title: '',
//   tags: [],
//   regData: '',
//   img: '',
//   ingredients: [],
//   recipe: '',
//   remarks: '',
// }

const initialState: PostState = {
  id: 2,
  title: '肉じゃが',
  tags: ['oishi', 'bangohan'],
  regDate: '2020/07/10',
  img: 'hogeho',
  ingredients: [
    { ingredient: 'potato', amount: 5, unit: 'こ' },
    { ingredient: 'tomato', amount: 500, unit: 'g' },
  ],
  recipe: ['hogehoge', 'mogemoge', 'toritori'],
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
