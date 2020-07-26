export type Tag =
  | '定番'
  | '肉のおかず'
  | '魚のおかず'
  | '野菜のおかず'
  | '卵のおかず'
  | '海藻類のおかず'
  | '大豆加工品のおかず'
  | '保存食のおかず'
  | '乳製品のおかず'
  | 'サラダ'
  | 'スープ・汁もの'
  | 'ご飯もの'
  | '丼もの'
  | '鍋もの'
  | '麺料理'
  | 'その他'
  | ''

interface Tags {
  tag: Tag
  [key: string]: any
}

export const tags: Tags[] = [
  {
    tag: '定番',
    img: require('../../assets/img/popular.jpg'),
  },
  { tag: '肉のおかず', img: require('../../assets/img/meat.jpg') },
  { tag: '魚のおかず', img: require('../../assets/img/fish.jpg') },
  { tag: '野菜のおかず', img: require('../../assets/img/vegetable.jpg') },
  { tag: '卵のおかず', img: require('../../assets/img/egg.jpg') },
  { tag: '海藻類のおかず', img: require('../../assets/img/seaweed.jpg') },
  { tag: '大豆加工品のおかず', img: require('../../assets/img/tofu.jpg') },
  { tag: '保存食のおかず', img: require('../../assets/img/jerky.jpg') },
  { tag: '乳製品のおかず', img: require('../../assets/img/cheese.jpg') },
  { tag: 'サラダ', img: require('../../assets/img/salad.jpg') },
  { tag: 'スープ・汁もの', img: require('../../assets/img/soup.jpg') },
  { tag: 'ご飯もの', img: require('../../assets/img/rice.jpg') },
  { tag: '丼もの', img: require('../../assets/img/ball.jpg') },
  { tag: '鍋もの', img: require('../../assets/img/pot.jpg') },
  { tag: '麺料理', img: require('../../assets/img/noodle.jpg') },
  { tag: 'その他', img: require('../../assets/img/etc.jpg') },
]
