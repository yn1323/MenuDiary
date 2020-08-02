import React from 'react'
import store from '../../store'

// component
import Edit from '../pages/Edit'

export default (): JSX.Element => {
  const post = store.getState().edit

  return <Edit post={post} />
}
