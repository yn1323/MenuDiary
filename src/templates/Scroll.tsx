import React from 'react'
import { Dimensions } from 'react-native'
import { Container, Content, View } from 'native-base'

interface Props {
  extraMargin?: number
  disableScroll?: boolean
  // bgColor?: string
  children: JSX.Element[] | JSX.Element
}

type AllProps = Readonly<Props>

export default ({
  extraMargin = 0,
  children,
  disableScroll = false,
}: // bgColor = '#ffffff00',
AllProps): JSX.Element => {
  const height = Dimensions.get('window').height + 20 + extraMargin

  return (
    <Container>
      <Content padder>
        <View style={disableScroll ? {} : { height }}>{children}</View>
      </Content>
    </Container>
  )
}
