import { MainState, RouteState, PostState } from '../store'

export interface State {
  main: MainState
  routes: RouteState[]
  post: PostState
}
