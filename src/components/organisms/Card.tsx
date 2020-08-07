import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, CardItem, Text, View } from 'native-base'
import { Actions } from 'react-native-router-flux'

// component
import RegisterDate from '../molecules/RegisterDate'

import globalStyle, { inactive } from '../../styles/global'

import { PostState } from '../../store'

import { setEdit } from '../../store/edit'

interface Props {
  uri: string
  title: string
  regDate: string
  allInfo: PostState
}

type AllProps = Readonly<Props>

export default memo(
  ({ uri, title, regDate, allInfo }: AllProps): JSX.Element => {
    const dispatch = useDispatch()
    const showDetail = () => {
      // storeにセット
      dispatch(setEdit(allInfo))
      Actions.Detail({ title })
    }

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.touchableOpacity}
        onPress={() => showDetail()}
      >
        <Card>
          <CardItem style={styles.card}>
            <View style={styles.cardColumns}>
              {/* <Image source={img} resizeMode="contain" style={styles.image} /> */}
              {uri ? (
                <Image
                  source={{ uri: uri }}
                  resizeMode="contain"
                  style={[styles.image, { backgroundColor: '#f0f0f0' }]}
                />
              ) : (
                <View style={[styles.image, { backgroundColor: '#f0f0f0' }]} />
              )}

              <View
                style={[globalStyle.center_v, styles.image, styles.titleArea]}
              >
                <Text style={styles.title}>{title}</Text>
              </View>
              <View style={styles.dateArea}>
                <RegisterDate regDate={regDate} />
              </View>
            </View>
          </CardItem>
        </Card>
      </TouchableOpacity>
    )
  },
)

const styles = StyleSheet.create({
  touchableOpacity: {
    // pointerEvents: 'none',
  },
  card: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  image: {
    height: 150,
    width: 150,
  },
  cardColumns: {
    flexDirection: 'row',
  },
  dateArea: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    flexDirection: 'row',
  },
  dateIcon: {
    fontSize: 15,
    color: inactive,
  },
  date: {
    fontSize: 12,
    color: inactive,
  },
  titleArea: {
    flexGrow: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    textAlign: 'left',
  },
})
