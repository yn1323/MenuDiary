import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'

// styles
import globalStyles from '../../styles/global'

export default (): JSX.Element => (
  <View style={styles.margin}>
    <Icon
      name="create"
      onPress={Actions.Edit}
      style={globalStyles.headline}
    ></Icon>
  </View>
)

const styles = StyleSheet.create({
  margin: {
    marginRight: 20,
  },
})
