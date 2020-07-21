import React, { useEffect } from 'react'
import { StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import { Text, Button, Icon, H3, View } from 'native-base'
import { PostState, Ingredients } from '../store/post'
import { useSelector } from 'react-redux'

// component
import Scroll from '../templates/Scroll'
import RegisterDate from '../containers/fragments/RegisterDate'
import Hr from '../containers/fragments/Hr'

// type
import { State } from '../../types'

// style
import globalStyle, { secondary } from '../styles/global'
import global from '../styles/global'

export default (): JSX.Element => {
  const { tag, img, comment, regDate } = useSelector(
    (state: State): PostState => state.post,
  )

  return (
    <Scroll disableScroll>
      {/* 画像 */}
      <Image
        source={require('../../assets/img/meat.jpg')}
        style={{ height: 280, width: '100%' }}
        resizeMode="contain"
      />

      {/* タグ & 作成日 */}
      <View style={styles.tagDate}>
        {/* タグ */}
        <Button small>
          <Icon name="pricetag" />
          <Text>{tag}</Text>
        </Button>
        <View style={global.center_v}>
          <RegisterDate regDate={regDate} />
        </View>
      </View>

      <Hr marginTop={10} marginBottom={10} />
      {/* コメント */}
      <View
        style={[globalStyle.center_vh, { height: 50 }, styles.headlineArea]}
      >
        <Icon name="thumbs-up" style={styles.headline} />
        <H3 style={styles.headline}> ポイント</H3>
      </View>

      <View style={globalStyle.center_vh}>
        <View style={styles.comment}>
          <Text>{comment}</Text>
        </View>
      </View>
    </Scroll>
  )
}

const styles = StyleSheet.create({
  tagDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginTop: 15,
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headlineArea: {
    backgroundColor: secondary,
  },
  headline: {
    color: '#fff',
  },
  comment: {
    width: '100%',
  },
})
