import React from 'react'
import { View } from 'react-native'
import { Text } from 'native-base'

// import { moduleName } from 'react-redux';

interface Props {}

type AllProps = Readonly<Props>

export default (): JSX.Element => {
  return (
    <View>
      <Text>TagEdit</Text>
    </View>
  )
}
