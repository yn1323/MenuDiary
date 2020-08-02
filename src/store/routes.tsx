import { createSlice } from '@reduxjs/toolkit'
import Config from '../components/pages/Config'
import Edit from '../components/pages/Edit'
import TagSelect from '../components/pages/TagSelect'
import Timeline from '../components/pages/Timeline'

export type RouteState = {
  title: string // メニューに表示
  component: any
  key: string
  initial: boolean // 初回表示
  icon: string
}

type Action = {
  type: string
  payload: any
}

const initialState: RouteState[] = [
  {
    title: 'タイムライン',
    component: Timeline,
    key: 'Timeline',
    initial: true,
    icon: 'home',
  },
  {
    title: '追加',
    component: Edit,
    key: 'Edit',
    initial: false,
    icon: 'create',
  },
  {
    title: '検索',
    component: TagSelect,
    key: 'TagSelect',
    initial: false,
    icon: 'search',
  },
  // {
  //   title: '設定',
  //   component: Config,
  //   key: 'Config',
  //   initial: false,
  //   icon: 'person',
  // },
]

const State = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setSelected: (state: RouteState[], action: Action): RouteState[] =>
      state.map((s: RouteState) => ({
        ...s,
        selected: s.key === action.payload,
        initial: s.key === action.payload,
      })),
  },
})

export default State.reducer

export const { setSelected } = State.actions
