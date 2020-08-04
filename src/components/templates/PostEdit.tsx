import React from 'react'
import { useSelector } from 'react-redux'
// import store from '../../store'

// component
import Edit from '../pages/Edit'

import { State } from '../../type'

export default (): JSX.Element => {
  const post = useSelector((state: State) => state.edit)

  return <Edit post={post} tag={post.tag} />
}
