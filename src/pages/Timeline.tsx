import React, { useCallback } from 'react'
import { Content, Body, Container } from 'native-base'
import { Actions } from 'react-native-router-flux'
// import { moduleName } from 'react-redux';

import Card from '../containers/parts/Card'
import globalStyle from '../styles/global'

interface Props {}

type AllProps = Readonly<Props>

export default (): JSX.Element => {
  const handlePress = () => {
    Actions.Post()
  }

  const mapCards = useCallback(() => {
    return (
      <>
        {testData.map((d) => (
          <Card
            icon={d.icon}
            img={d.img}
            menuName={d.menuName}
            tags={d.tags}
            likes={d.likes}
            comments={d.comments}
            regDate={d.regDate}
          />
        ))}
      </>
    )
  }, [])

  return (
    <Container>
      <Content padder style={globalStyle.content_padding}>
        {mapCards()}
      </Content>
    </Container>
  )
}

const testData = [
  {
    icon: require('../../assets/icons/main.png'),
    img: require('../../assets/icons/main.png'),
    menuName: 'メニュー名',
    tags: ['ランチ', '肉', 'かんたん！'],
    likes: 15,
    comments: ['OK', 'oishii'],
    regDate: '2020/07/05',
  },
  {
    icon: require('../../assets/icons/main.png'),
    img: require('../../assets/icons/main.png'),
    menuName: 'メニュー名',
    tags: ['ランチ', '肉', 'かんたん！'],
    likes: 15,
    comments: ['OK', 'oishii'],
    regDate: '2020/07/05',
  },
  {
    icon: require('../../assets/icons/main.png'),
    img: require('../../assets/icons/main.png'),
    menuName: 'メニュー名',
    tags: ['ランチ', '肉', 'かんたん！'],
    likes: 15,
    comments: ['OK', 'oishii'],
    regDate: '2020/07/05',
  },
  {
    icon: require('../../assets/icons/main.png'),
    img: require('../../assets/icons/main.png'),
    menuName: 'メニュー名',
    tags: ['ランチ', '肉', 'かんたん！'],
    likes: 15,
    comments: ['OK', 'oishii'],
    regDate: '2020/07/05',
  },
]
