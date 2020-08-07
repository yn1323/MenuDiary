import React from 'react'
import { Dimensions } from 'react-native'
import { Container, Content, View } from 'native-base'

import Fabs from '../molecules/Fabs'

interface Props {
  extraMargin?: number
  disableScroll?: boolean
  children: JSX.Element[] | JSX.Element
  fabs?: boolean
}

type AllProps = Readonly<Props>

export default ({
  extraMargin = 0,
  children,
  disableScroll = false,
  fabs = false,
}: AllProps): JSX.Element => {
  const height = Dimensions.get('window').height + 20 + extraMargin

  return (
    <Container>
      <Content padder>
        <View style={disableScroll ? {} : { height }}>{children}</View>
      </Content>
      {fabs ? <Fabs /> : <></>}
    </Container>
  )
}
