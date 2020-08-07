import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

// component
import Scroll from '../templates/Scroll'
import Card from '../organisms/Card'

// type
import { State } from '../../types'
import { PostState } from '../../store/post'

export default (): JSX.Element => {
  const posts = useSelector((state: State) => state.post)
  const search = useSelector((state: State) => state.search.tag)

  const filteredPosts = search
    ? posts.filter((post: PostState) => post.tag === search)
    : [...posts]

  return (
    <ScrollView>
      {filteredPosts.length ? (
        filteredPosts.map((d: PostState, index: number) => (
          <View
            style={
              index === 0
                ? [styles.cardSpace, styles.cardSpaceTop]
                : index === filteredPosts.length - 1
                ? [styles.cardSpace, styles.cardSpaceBottom]
                : [styles.cardSpace]
            }
          >
            <Card
              key={index}
              uri={d.uri}
              title={d.title}
              regDate={d.regDate}
              allInfo={d}
            />
          </View>
        ))
      ) : (
        <View style={{ padding: 10 }}>
          <Text>料理がありません。</Text>
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cardSpace: {
    marginHorizontal: 10,
  },
  cardSpaceTop: {
    marginTop: 5,
  },
  cardSpaceBottom: {
    marginBottom: 5,
  },
})
