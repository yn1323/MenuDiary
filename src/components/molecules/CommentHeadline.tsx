import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Icon, H3 } from 'native-base'

import globalStyle, { secondary } from '../../styles/global'

export default (): JSX.Element => {
  return (
    <View style={[globalStyle.center_vh, styles.headlineArea]}>
      <Icon name="thumbs-up" style={styles.headline} />
      <H3 style={styles.headline}> ポイント</H3>
    </View>
  )
}

const styles = StyleSheet.create({
  headlineArea: {
    height: 50,
    backgroundColor: secondary,
  },
  headline: {
    color: '#fafafa',
  },
})
