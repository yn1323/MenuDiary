// 配列の１つの隣とずらす
export const arrayMove = (arr: [], from: number, to: number): [] => {
  const start = from > to ? from : to
  arr.splice(start - 1, 2, arr[start], arr[start - 1])

  return [...arr]
}
