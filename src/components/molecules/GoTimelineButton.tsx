import React from 'react'

import LeftButton from '../atoms/LeftButton'

export default (props: any): JSX.Element => (
  <LeftButton route="main" icon="arrow-back" callback={props} />
)
