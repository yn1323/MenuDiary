import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Icon, Text } from 'native-base'

import globalStyle from '../../styles/global'

export default (): JSX.Element => {
  const upload = () => {
    alert('upload Photo')
  }

  return (
    <TouchableOpacity
      style={[styles.img, globalStyle.center_vh, styles.noImg]}
      onPress={() => upload()}
      activeOpacity={0.9}
    >
      <Icon name="camera" style={styles.noImgIcon}></Icon>
      <Text style={styles.noImgText}>Upload Photo</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 280,
    width: '100%',
  },
  noImg: {
    backgroundColor: '#aaa',
    flexDirection: 'column',
  },
  noImgText: {
    color: '#ddd',
  },
  noImgIcon: {
    color: '#ddd',
    fontSize: 100,
  },
})
