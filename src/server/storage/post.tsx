import Storage from './common'
import { Post } from '../../types'

const key = 'POST'

export const getPost = (): Promise<Post> =>
  new Promise((resolve, reject) => {
    Storage.getAllDataForKey(key)
      .then((d) => resolve(d))
      .catch((e) => reject(e))
  })

export const insertPost = (data: Post): Promise<boolean> =>
  new Promise((resolve, reject) => {
    const id = data.id
    Storage.save({ key, id, data })
      .then(() => resolve(true))
      .catch((e) => reject(false))
  })

export const deletePost = (id: string): Promise<boolean> =>
  new Promise((resolve, reject) => {
    Storage.remove({ key, id })
      .then(() => resolve(true))
      .catch((e) => reject(false))
  })
