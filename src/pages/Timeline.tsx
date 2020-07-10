import React, { useCallback } from 'react'
import { Content, Body, Container } from 'native-base'
import { Actions } from 'react-native-router-flux'
// import { moduleName } from 'react-redux';

// component
import Card from '../containers/parts/Card'
import Paginator from '../containers/parts/Paginator'
import globalStyle from '../styles/global'

export default (): JSX.Element => {
  const mapCards = useCallback(() => {
    return (
      <>
        {testData.map((d, index) => (
          <Card
            key={index}
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

  const renderPaginator = useCallback(() => {
    return <Paginator from={1} to={4} all={30} />
  }, [])

  return (
    <Container>
      <Content padder style={{ marginBottom: 40 }}>
        {mapCards()}
        {renderPaginator()}
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
