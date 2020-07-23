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
            <Card key={index} img={d.img} title={d.title} regDate={d.regDate} />
          ))}
        </>
      }
    </Scroll>
  )
}

const testData = [
  {
    img: require('../../../assets/icons/main.png'),
    title: 'メニュー名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
  {
    img: require('../../../assets/icons/main.png'),
    title: 'メニューdsadasd名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
  {
    img: require('../../../assets/icons/main.png'),
    title: 'メニュdsaddddddddddddー名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
  {
    img: require('../../../assets/icons/main.png'),
    title: 'メニュー名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
  {
    img: require('../../../assets/icons/main.png'),
    title: 'メニュー名',
    tags: '肉',
    comments: 'aaa',
    regDate: '2020/07/05',
  },
]
