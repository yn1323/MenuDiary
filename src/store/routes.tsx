import { createSlice } from '@reduxjs/toolkit'
import Config from '../pages/Config'
import Detail from '../pages/Detail'
import Login from '../pages/Login'
import PostEdit from '../pages/PostEdit'
import SearchCondition from '../pages/SearchCondition'
import SearchList from '../pages/SearchList'
import TagEdit from '../pages/TagEdit'
import Timeline from '../pages/Timeline'
import Tutorial from '../pages/Tutorial'

export type RouteState = {
  title: string // メニューに表示
  component: any
  key: string
  initial: boolean // 初回表示
  selected: boolean // ドロワーで選択状態か(使用していない)
  showInDrawer: boolean // ドロワー表示
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
    initial: false,
    selected: true,
    showInDrawer: true,
  },
  {
    title: '検索条件',
    component: SearchCondition,
    key: 'SearchCondition',
    initial: false,
    selected: false,
    showInDrawer: true,
  },
  {
    title: 'タグ編集',
    component: TagEdit,
    key: 'TagEdit',
    initial: false,
    selected: false,
    showInDrawer: true,
  },
  {
    title: '設定',
    component: Config,
    key: 'Config',
    initial: false,
    selected: false,
    showInDrawer: true,
  },
  {
    title: '詳細表示',
    component: Detail,
    key: 'Detail',
    initial: false,
    selected: false,
    showInDrawer: false,
  },
  {
    title: 'ログイン',
    component: Login,
    key: 'Login',
    initial: false,
    selected: false,
    showInDrawer: false,
  },
  {
    title: '編集',
    component: PostEdit,
    key: 'PostEdit',
    initial: false,
    selected: false,
    showInDrawer: false,
  },
  {
    title: '検索結果',
    component: SearchList,
    key: 'SearchList',
    initial: false,
    selected: false,
    showInDrawer: false,
  },
  {
    title: 'チュートリアル',
    component: Tutorial,
    key: 'Tutorial',
    initial: false,
    selected: false,
    showInDrawer: true,
  },
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
