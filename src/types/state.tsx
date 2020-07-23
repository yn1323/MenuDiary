import { RouteState, PostState, UserState, EditState } from '../store'

export interface State {
  routes: RouteState[]
  post: PostState[]
  user: UserState
  edit: EditState
}
