import { createSlice } from '@reduxjs/toolkit'
import uuid from '../helpers/uuid'

// helper
import { arrayMove } from '../helpers/common'

export type TagState = {
  id: string
  tag: string
}

interface AddTagAction {
  payload: {
    tag: string
  }
}
interface DelTagAction {
  payload: {
    id: string
  }
}
interface ChangeTagOrderAction {
  payload: {
    from: number
    to: number
  }
}

const initialState: TagState[] = [
  { id: 'morning', tag: '朝食' },
  { id: 'lunch', tag: '昼食' },
  { id: 'dinner', tag: '夕食' },
  { id: 'supper', tag: 'おやつ' },
  { id: 'meat', tag: '肉' },
  { id: 'fish', tag: '魚' },
  { id: 'vegetable', tag: '野菜' },
]

const MAX_TAGS = 12

const State = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    addTag: (state: TagState[], { payload }: AddTagAction) => {
      if (state.length >= MAX_TAGS) {
        alert(`タグは${MAX_TAGS}個までです。。。`)

        return [...state]
      }

      return [...state, { id: uuid(), tag: payload.tag }]
    },
    delTag: (state: TagState[], { payload }: DelTagAction) => [
      ...state.filter((tag) => tag.id !== payload.id),
    ],
    changeTagOrder: (state: TagState[], { payload }: ChangeTagOrderAction) => [
      ...arrayMove([...state], payload.from, payload.to),
    ],
  },
})

export default State.reducer

export const { addTag, delTag, changeTagOrder } = State.actions
