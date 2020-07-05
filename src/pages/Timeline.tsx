import React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'
// import { moduleName } from 'react-redux';

interface Props {}

type AllProps = Readonly<Props>

export default (): JSX.Element => {
  const handlePress = () => {
    Actions.Post()
  }

  return (
    <View>
      <Text>TimeLine</Text>
      <Button style={{ width: 500 }} onPress={handlePress}>
        <Text>詳細</Text>
      </Button>
    </View>
  )
}
