import React from 'react'
import TagSelect from '../pages/TagSelect'

export default ({ children }): JSX.Element => {
  return <TagSelect isTagSet>{children}</TagSelect>
}
