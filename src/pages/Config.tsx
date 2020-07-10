import React from 'react'
import { View } from 'react-native'
import { Text, Container, Content } from 'native-base'
// import { moduleName } from 'react-redux';

interface Props {}

type AllProps = Readonly<Props>

export default (): JSX.Element => {
  return (
    <Container>
      <Content padder></Content>
    </Container>
  )
}
