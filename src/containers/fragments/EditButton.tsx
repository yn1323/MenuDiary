import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'

export default (): JSX.Element => (
  <View style={styles.margin}>
    <Icon name="create" onPress={Actions.PostEdit} style={styles.text}></Icon>
  </View>
)

const styles = StyleSheet.create({
  text: {
    color: '#eee',
  },
  margin: {
    marginRight: 20,
  },
})
