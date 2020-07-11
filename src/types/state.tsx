import { MainState, RouteState, PostState, UserState, TagState } from '../store'

export interface State {
  main: MainState
  routes: RouteState[]
  post: PostState
  user: UserState
  tag: TagState[]
}
