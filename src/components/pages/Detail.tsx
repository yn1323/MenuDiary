import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Text, Button, Icon, View } from 'native-base'
import { EditState } from '../../store/edit'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { setSearch } from '../../store/search'

// component
import Scroll from '../templates/Scroll'
import RegisterDate from '../molecules/RegisterDate'
import Hr from '../atoms/Hr'
import CommentHeadline from '../molecules/CommentHeadline'

// type
import { State } from '../../types'

// style
import globalStyle, { secondary } from '../../styles/global'

export default (): JSX.Element => {
  const dispatch = useDispatch()
  const { tag, uri, comment, regDate } = useSelector(
    (state: State): EditState => state.edit,
  )
  const filterPost = () => {
    dispatch(setSearch({ tag }))
    Actions.Timeline()
  }

  return (
    <Scroll disableScroll>
      {/* 画像 */}
      <Image
        source={uri ? { uri } : require('../../../assets/img/meat.jpg')}
        style={{ height: 280, width: '100%' }}
        resizeMode="contain"
      />

      {/* タグ & 作成日 */}
      <View style={styles.tagDate}>
        {/* タグ */}
        <Button small onPress={filterPost}>
          <Icon name="pricetag" />
          <Text>{tag}</Text>
        </Button>
        <View style={globalStyle.center_v}>
          <RegisterDate regDate={regDate} />
        </View>
      </View>

      <Hr marginTop={10} marginBottom={10} />
      {/* コメント */}
      <CommentHeadline />

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
