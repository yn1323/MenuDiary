import React from 'react'
import { useSelector } from 'react-redux'

// component
import Scroll from '../templates/Scroll'
import Card from '../organisms/Card'

// type
import { State } from '../../types'
import { PostState } from '../../store/post'

export default (): JSX.Element => {
  const posts = useSelector((state: State) => state.post)

  return (
    <Scroll>
      {
        <>
          {posts.map((d: PostState, index: number) => (
            <Card
              key={index}
              uri={d.uri}
              title={d.title}
              regDate={d.regDate}
              allInfo={d}
            />
          ))}
        </>
      }
    </Scroll>
  )
}
