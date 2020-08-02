import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from 'native-base'

// styles
import globalStyles, { primary } from '../../styles/global'

export default (clicked: any): JSX.Element => (
  <View style={styles.margin}>
    <Icon
      name="checkmark"
      onPress={clicked}
      style={[globalStyles.headline, styles.text]}
    ></Icon>
  </View>
)

const styles = StyleSheet.create({
  margin: {
    marginRight: 20,
  },
  text: {
    color: primary,
  },
})
