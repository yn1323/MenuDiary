// Test Page
import React, { useEffect } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Text, Button, Icon } from 'native-base'
import { EditState } from '../../store/edit'
import { PostState, fetchPost, addPost, removePost } from '../../store/post'
import { useSelector, useDispatch } from 'react-redux'

// Component
import Scroll from '../templates/Scroll'

// type
import { State } from '../../types'

export default (): JSX.Element => {
  const posts = useSelector((state: State) => state.post)
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPost())
    }, 500)
  }, [])

  const add = () => {
    dispatch(
      addPost({
        id: Math.random().toString(),
        title: 'hoge',
        tag: 'その他',
        regDate: '2020-07-01',
        uri: 'http;;',
        comment: 'dasdada',
      }),
    )
  }
  const fix = () => {
    dispatch(
      addPost({
        id: posts[0].id,
        title: Math.random().toString(),
        tag: 'その他',
        regDate: '2020-07-31',
        uri: 'http;;',
        comment: 'dasdada',
      }),
    )
  }
  const reload = () => {
    dispatch(fetchPost())
  }
  const del = () => {
    dispatch(removePost(posts[0].id))
  }

  return (
    <Scroll disableScroll>
      <View>
        <Button onPress={add}>
          <Text>Add</Text>
        </Button>
        <Button onPress={fix}>
          <Text>Fix</Text>
        </Button>
        <Button onPress={del}>
          <Text>Delete</Text>
        </Button>
        <Button onPress={reload}>
          <Text>Reload</Text>
        </Button>
        {posts.map(({ id, title, tag, regDate, uri, comment }: PostState) => {
          return (
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Text>id</Text>
                <Text>{id}</Text>
                <Text>|</Text>
                <Text>title</Text>
                <Text>{title}</Text>
                <Text>|</Text>
                <Text>tag</Text>
                <Text>{tag}</Text>
                <Text>|</Text>
                <Text>regDate</Text>
                <Text>{regDate}</Text>
                {/* <Text>|</Text>
                <Text>uri</Text>
                <Text>{uri}</Text>
                <Text>|</Text>
                <Text>comment</Text>
                <Text>{comment}</Text>
                <Text>|</Text> */}
              </View>
            </View>
          )
        })}
      </View>
    </Scroll>
  )
}
