import moment from 'moment'
import { PostState } from '../store/post'

// 配列の１つの隣とずらす
export const arrayMove = (arr: [], from: number, to: number): [] => {
  const start = from > to ? from : to
  arr.splice(start - 1, 2, arr[start], arr[start - 1])

  return [...arr]
}

export const now = (): string => moment(new Date()).format('YYYY-MM-DD')

// postの配列を日付順順に並べ替える
export const orderPost = (arr: PostState[]): PostState[] => {
  arr.sort(function (a, b) {
    if (a.regDate > b.regDate) {
      return -1
    } else {
      return 1
    }
  })
  console.log(arr)

  return arr
}
