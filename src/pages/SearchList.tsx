import React from 'react'
import { View, Text, Button } from 'native-base'
import { Actions } from 'react-native-router-flux'
// import { moduleName } from 'react-redux';

interface Props {}

type AllProps = Readonly<Props>

export default (): JSX.Element => {
  const handlePress = () => {
    Actions.Detail()
  }

  return (
    <View>
      <Text>Search List</Text>
      <Button style={{ width: '500px' }} onPress={handlePress}>
        <Text>詳細表示！</Text>
      </Button>
    </View>
  )
}
