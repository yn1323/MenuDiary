import Config from '../components/pages/Config'
import Detail from '../components/pages/Detail'
import Login from '../components/pages/Login'
import PostEdit from '../components/pages/PostEdit'
import SearchCondition from '../components/pages/SearchCondition'
import SearchList from '../components/pages/SearchResult'
import TagEdit from '../components/pages/TagEdit'
import Timeline from '../components/pages/Timeline'
import Tutorial from '../components/pages/Tutorial'

export const pages = [
  {
    title: '設定',
    component: Config,
    key: 'Config',
    initial: false,
    selected: false,
  },
  {
    title: '詳細表示',
    component: Detail,
    key: 'Detail',
    initial: false,
    selected: false,
  },
  {
    title: 'ログイン',
    component: Login,
    key: 'Login',
    initial: false,
    selected: false,
  },
  {
    title: '編集',
    component: PostEdit,
    key: 'PostEdit',
    initial: false,
    selected: false,
  },
  {
    title: '検索条件',
    component: SearchCondition,
    key: 'SearchCondition',
    initial: false,
    selected: false,
  },
  {
    title: '検索結果',
    component: SearchList,
    key: 'SearchList',
    initial: false,
    selected: false,
  },
  {
    title: 'タグ編集',
    component: TagEdit,
    key: 'TagEdit',
    initial: false,
    selected: false,
  },
  {
    title: 'タイムライン',
    component: Timeline,
    key: 'Timeline',
    initial: true,
    selected: true,
  },
  {
    title: 'チュートリアル',
    component: Tutorial,
    key: 'Tutorial',
    initial: false,
    selected: false,
  },
]
