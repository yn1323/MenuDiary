import React, { useState, useRef, useEffect } from 'react'
import { Animated, View, Dimensions, StyleSheet } from 'react-native'
import { Button, Text, H2, Input, Item } from 'native-base'

import Hr from '../atoms/Hr'

const height = Dimensions.get('window').height

const FadeInView = (props: any): JSX.Element => {
  const fadeAnim = useRef(new Animated.Value(0.5)).current // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
    }).start()
  }, [fadeAnim])

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  )
}

interface Props {
  visible: boolean
  close?: any
  input?: boolean
  setInput?: any
  title?: string
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default ({
  visible,
  close,
  input,
  setInput,
  title,
}: Props): JSX.Element => {
  const [text, setText] = useState(input)

  if (!visible) return <></>
  const renderTitle = () =>
    title ? (
      <>
        <H2 style={styles.title}>{title}</H2>
        <Hr marginTop={5} marginBottom={10} />
      </>
    ) : (
      <></>
    )

  const successDialog = () => {
    setInput(text)
    closeDialog()
  }
  const closeDialog = () => close()

  return (
    <View style={styles.overlay}>
      <FadeInView
        // なぜかstyles....で渡せない
        style={{
          width: '80%',
          backgroundColor: '#eee',
          justifyContent: 'center',
          borderRadius: 5,
          shadowColor: '#ccc',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowRadius: 0,
          shadowOpacity: 1,
          elevation: 2,
          padding: 15,
        }}
      >
        <View>
          {renderTitle()}
          <Item>
            <Input onChangeText={(t) => setText(t)} value={text} />
          </Item>
          <Hr marginTop={10} marginBottom={10} />
          <View style={styles.buttonArea}>
            <Button primary onPress={successDialog} block style={styles.button}>
              <Text>OK</Text>
            </Button>
            <Button
              info
              onPress={closeDialog}
              bordered
              block
              style={styles.button}
            >
              <Text>Cancel</Text>
            </Button>
          </View>
        </View>
      </FadeInView>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: height,
  },
  title: {
    textAlign: 'center',
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '30%',
  },
  input: {
    marginVertical: 20,
  },
})
