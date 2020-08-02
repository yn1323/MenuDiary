import React from 'react'
import { useSelector } from 'react-redux'
import { View } from 'react-native'

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
    <Scroll>
      {
        <View>
          {filteredPosts.map((d: PostState, index: number) => (
            <Card
              key={index}
              uri={d.uri}
              title={d.title}
              regDate={d.regDate}
              allInfo={d}
            />
          ))}
        </View>
      }
    </Scroll>
  )
}
