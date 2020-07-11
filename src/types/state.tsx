import { MainState, RouteState, PostState, UserState } from '../store'

export interface State {
  main: MainState
  routes: RouteState[]
  post: PostState
  user: UserState
}
