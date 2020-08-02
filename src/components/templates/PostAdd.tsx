import React from 'react'

// component
import Edit from '../pages/Edit'

// type
import { createNewPost } from '../../store/edit'

export default (): JSX.Element => {
  const post = createNewPost()

  return <Edit post={post} />
}
