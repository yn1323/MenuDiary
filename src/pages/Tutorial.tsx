import React, { useState } from 'react'
import { StyleSheet, Dimensions, Image } from 'react-native'
import { Text, Content, View, Body, Button } from 'native-base'
import GestureRecognizer from 'react-native-swipe-gestures'
import { Actions } from 'react-native-router-flux'
import Pagedot from '../containers/fragments/Pagedot'

export interface Desc {
  key: string
  bgColor: string
  desc: string
}

const description: Desc[] = [
  { key: '1', desc: '説明文1', bgColor: 'red' },
  { key: '2', desc: '説明文2', bgColor: 'blue' },
  { key: '3', desc: '説明文3', bgColor: 'green' },
]

export default (): JSX.Element => {
  const [selected, setSelected] = useState(0)

  const handleSkip = () => {
    Actions.drawer()
  }
  const handleSwipe = (inc) => {
    console.log(inc)
  }

  return (
    <Content padder>
      <GestureRecognizer
        onSwipeRight={() => handleSwipe(-1)}
        onSwipeLeft={() => handleSwipe(1)}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button onPress={handleSkip} small>
            <Text>Skip</Text>
          </Button>
        </View>

        <View style={styles.centeringnHorizon}>
          <View style={styles.centeringVertical}>
            <Body style={styles.margin}>
              <Image
                source={{ uri: require('../../assets/icons/main.png') }}
                style={styles.image}
              />
            </Body>
            <Body style={styles.description}>
              <Text>説明文</Text>
            </Body>
            <Body>
              <Pagedot all={description} selected={selected}></Pagedot>
            </Body>
          </View>
        </View>
      </GestureRecognizer>
    </Content>
  )
}

const styles = StyleSheet.create({
  margin: {
    marginVertical: 150,
    flexGrow: 3,
  },
  description: {
    flexGrow: 3,
  },
  centeringVertical: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: Dimensions.get('window').height - 120,
  },
  centeringnHorizon: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  skip: {
    position: 'absolute',
    right: 10,
    fontSize: 20,
    color: 'blue',
  },
  image: {
    height: 250,
    width: 250,
  },
})
