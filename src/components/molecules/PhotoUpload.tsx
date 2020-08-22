import React, { useEffect } from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Icon, Text } from 'native-base'

// Expo
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

import globalStyle from '../../styles/global'

interface Props {
  uri: string
  setUri: any
}

export default ({ uri, setUri }: Props): JSX.Element => {
  useEffect(() => {
    getPermissionAsync()
  }, [])

  const getPermissionAsync = async () => {
    if (Constants?.platform?.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!')
      }
    }
  }

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      if (!result.cancelled) {
        setUri(result.uri)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return uri ? (
    <TouchableOpacity activeOpacity={0.9} onPress={pickImage}>
      <Image source={{ uri }} resizeMode="contain" style={styles.img} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[styles.img, globalStyle.center_vh, styles.noImg]}
      onPress={pickImage}
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
