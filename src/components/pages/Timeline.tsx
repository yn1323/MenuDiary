import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../../store/edit'

// component
import Scroll from '../templates/Scroll'
import Card from '../organisms/Card'

// type
import { State } from '../../types'
import { PostState } from '../../store/post'

export default (): JSX.Element => {
  const dispatch = useDispatch()
  // 編集を空にする
  dispatch(reset())

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
