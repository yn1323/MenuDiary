import {
  RouteState,
  PostState,
  UserState,
  EditState,
  SearchState,
} from '../store'

export interface State {
  routes: RouteState[]
  post: PostState[]
  user: UserState
  edit: EditState
  search: SearchState
}
