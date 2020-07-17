import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Text, Content, View, Thumbnail, Body } from 'native-base'
// import { moduleName } from 'react-redux';

export default (): JSX.Element => {
  return (
    <Content>
      <View style={styles.centeringnHorizon}>
        <View style={styles.centeringVertical}>
          <Body>
            <Text style={styles.h1}>Menu Diary</Text>
          </Body>
          <Body>
            <Thumbnail large source={require('../../assets/icons/main.png')} />
          </Body>
          <Body>
            <Text>ログイン</Text>
          </Body>
        </View>
      </View>
    </Content>
  )
}

const styles = StyleSheet.create({
  h1: {
    marginVertical: 50,
    fontSize: 60,
  },
  centeringVertical: {
    justifyContent: 'center',
    flexDirection: 'column',
    height: Dimensions.get('window').height,
  },
  centeringnHorizon: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
})
