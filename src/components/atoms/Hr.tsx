import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'native-base'

interface Props {
  marginTop?: number
  marginBottom?: number
  margin?: number
}

export default ({ marginTop, marginBottom, margin }: Props): JSX.Element => {
  return (
    <View style={[styles.container, { marginTop, marginBottom, margin }]}>
      <View style={styles.border}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    height: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  border: {
    width: '100%',
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 1,
  },
})
