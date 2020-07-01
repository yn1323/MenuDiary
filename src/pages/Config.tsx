import React from 'react'
import { View, Text } from 'native-base'
// import { moduleName } from 'react-redux';

interface Props {}

type AllProps = Readonly<Props>

export default (): JSX.Element => {
  return (
    <View>
      <Text>Config</Text>
    </View>
  )
}
