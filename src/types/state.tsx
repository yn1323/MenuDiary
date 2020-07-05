import { MainState, RouteState } from '../store'

export interface State {
  main: MainState
  routes: RouteState[]
}
