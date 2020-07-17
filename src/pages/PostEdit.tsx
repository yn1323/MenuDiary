import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, Dimensions } from 'react-native'
import { Text, H1, H3, View, Item, Input, Label, Textarea } from 'native-base'
import { PostState, Ingredients } from '../store/post'
import { useSelector } from 'react-redux'

// component
import Scroll from '../templates/Scroll'
import Tags from '../containers/fragments/Tags'
import Hr from '../containers/fragments/Hr'
import Dialog from '../templates/Dialog'
// type
import { State } from '../../types'

// style
import globalStyle from '../styles/global'

const limits = {
  title: {
    length: 128,
  },
  comment: {
    length: 1280,
  },
}

export default (): JSX.Element => {
  const [title, setTitle] = useState(
    useSelector((state: State) => state.post.title),
  )
  const [tags, setTags] = useState(
    useSelector((state: State) => state.post.tags),
  )
  const [ingredients, setIngredients] = useState(
    useSelector((state: State) => state.post.ingredients),
  )
  const [img, setImg] = useState(useSelector((state: State) => state.post.img))
  const [recipe, setRecipe] = useState(
    useSelector((state: State) => state.post.recipe),
  )
  const [comment, setComment] = useState(
    useSelector((state: State) => state.post.comment),
  )
  const [regDate, setRegDate] = useState(
    useSelector((state: State) => state.post.regDate),
  )

  const renderIngredients = () =>
    ingredients.map((ingredient: Ingredients, index: number) => (
      <>
        <View style={styles.ingredients} key={index}>
          <View style={globalStyle.right}>
            <Text>{ingredient.ingredient}</Text>
          </View>
          <View style={globalStyle.right}>
            <Text>{`${ingredient.amount} ${ingredient.unit}`}</Text>
          </View>
        </View>
        <Hr />
      </>
    ))

  return (
    <Scroll extraMargin={50}>
      {/* タイトル */}
      <View style={[globalStyle.center_vh, { height: 50 }]}>
        <Item>
          <Input
            placeholder="タイトル"
            value={title}
            onChangeText={(t) => setTitle(t)}
            maxLength={limits.title.length}
          />
        </Item>
      </View>

      <Hr marginTop={10} />

      {/* タグ & 作成日 */}
      <View style={[styles.tag_date, { height: 50 }]}>
        {/* タグ */}
        <View style={[styles.tags, globalStyle.center_v]}>
          <Tags tags={tags} />
        </View>
        {/* 日付 */}
        <View style={[globalStyle.center_v, { marginRight: 10 }]}>
          <Text>{regDate}</Text>
        </View>
      </View>

      {/* 画像 */}
      <Image
        source={require('../../assets/icons/main.png')}
        style={{ height: 300, width: '100%' }}
      />

      <Hr />

      {/* 材料 */}
      <View style={[globalStyle.center_vh, { height: 50 }]}>
        <H3>材料</H3>
      </View>

      {renderIngredients()}

      <Hr marginTop={70} />

      {/* レシピ */}
      <View style={[globalStyle.center_vh, { height: 50 }]}>
        <H3>レシピ</H3>
      </View>

      <View style={globalStyle.center_vh}>
        <Text>{recipe}</Text>
      </View>

      <Hr marginTop={70} />

      {/* コメント */}
      <View style={[globalStyle.center_vh, { height: 50 }]}>
        <H3>コメント</H3>
      </View>

      <View style={globalStyle.center_vh}>
        <Item>
          <Textarea
            placeholder="コメント"
            rowSpan={5}
            value={comment}
            onChangeText={(t) => setComment(t)}
            maxLength={limits.title.length}
          />
        </Item>
      </View>
    </Scroll>
  )
}

const styles = StyleSheet.create({
  tag_date: {
    flexDirection: 'row',
  },
  tags: {
    flexDirection: 'row',
    flexGrow: 3.5,
    paddingLeft: 5,
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ingredients: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 25,
    marginTop: 15,
    paddingHorizontal: 15,
  },
})
