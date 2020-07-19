import React from 'react'
import { StyleSheet, Image, Dimensions } from 'react-native'
import { Container, Content, H1, View } from 'native-base'

// style
import globalStyle, { backgroundColor, secondary } from '../styles/global'

const title = 'Menu Diary'
const circleSize = 150

export default (): JSX.Element => {
  const height = Dimensions.get('window').height + 70 // 上下padding分を足す

  return (
    <Container>
      <Content padder contentContainerStyle={{ backgroundColor }}>
        <View style={[globalStyle.center_vh, { height }]}>
          <View style={{ flexDirection: 'column' }}>
            {/* タイトル */}
            <View style={[styles.textArea, globalStyle.center_vh]}>
              <H1>{title}</H1>
            </View>
            {/* アイコン */}
            <View style={[styles.circle, globalStyle.center_vh]}>
              <Image
                source={require('../../assets/icons/pan.png')}
                style={styles.image}
              />
            </View>
          </View>
        </View>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  textArea: {
    width: circleSize,
    marginBottom: 30,
  },
  circle: {
    width: circleSize,
    height: circleSize,
    backgroundColor: secondary,
    borderRadius: circleSize / 2,
  },
  image: {
    width: circleSize * 0.7,
    height: circleSize * 0.7,
  },
})
