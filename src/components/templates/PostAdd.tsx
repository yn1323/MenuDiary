import React from 'react'
import { useSelector } from 'react-redux'
// component
import Edit from '../pages/Edit'

// type
import { createNewPost } from '../../store/edit'
import { State } from '../../types'

export default (): JSX.Element => {
  const post = createNewPost()
  const tag = useSelector((state: State) => state.edit.tag)

  return <Edit post={post} tag={tag} />
}
