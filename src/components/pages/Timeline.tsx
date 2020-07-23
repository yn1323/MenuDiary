import React from 'react'

// component
import Scroll from '../templates/Scroll'
import Card from '../organisms/Card'

export default (): JSX.Element => {
  return (
    <Scroll>
      {
        <>
          {testData.map((d, index) => (
            <Card key={index} uri={d.uri} title={d.title} regDate={d.regDate} />
          ))}
        </>
      }
    </Scroll>
  )
}
// const str = () => require('https://reactnative.dev/img/header_logo.png')
const testData = [
  {
    uri: 'https://facebook.github.io/react-native/img/header_logo.png',
    title: 'メニュー名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
  {
    uri: 'https://facebook.github.io/react-native/img/header_logo.png',
    title: 'メニューdsadasd名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
  {
    uri: 'https://facebook.github.io/react-native/img/header_logo.png',
    title: 'メニュdsaddddddddddddー名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
  {
    uri: 'https://facebook.github.io/react-native/img/header_logo.png',
    title: 'メニュー名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
  {
    uri: 'https://facebook.github.io/react-native/img/header_logo.png',
    title: 'メニュー名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
]
