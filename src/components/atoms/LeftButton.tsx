import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'

// styles
import globalStyles from '../../styles/global'

interface Props {
  icon: string
  route: string
  callback?: any
}

export default ({ icon, route, callback }: Props): JSX.Element => {
  const pressHandler = () => {
    if (callback) callback()
    Actions[route]()
  }

  return (
    <View style={styles.margin}>
      <Icon
        name={icon}
        onPress={pressHandler}
        style={globalStyles.headline}
      ></Icon>
    </View>
  )
}
const styles = StyleSheet.create({
  margin: {
    marginLeft: 20,
  },
})
