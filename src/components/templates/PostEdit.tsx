import React from 'react'
import { useSelector } from 'react-redux'

// component
import Edit from '../pages/Edit'

// type
import { State } from '../../types'

export default (): JSX.Element => {
  const post = useSelector((state: State) => state.edit)

  return <Edit post={post} />
}
