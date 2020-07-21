import React, { useCallback } from 'react'
import { Content, Body, Container } from 'native-base'
import { Actions } from 'react-native-router-flux'
// import { moduleName } from 'react-redux';

// component
import Scroll from '../templates/Scroll'
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
            img={d.img}
            title={d.title}
            tags={d.tags}
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

  return <Scroll>{mapCards()}</Scroll>
}

const testData = [
  {
    img: require('../../assets/icons/main.png'),
    title: 'メニュー名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
  {
    img: require('../../assets/icons/main.png'),
    title: 'メニューdsadasd名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
  {
    img: require('../../assets/icons/main.png'),
    title: 'メニュdsaddddddddddddー名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
  {
    img: require('../../assets/icons/main.png'),
    title: 'メニュー名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
  {
    img: require('../../assets/icons/main.png'),
    title: 'メニュー名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
]
