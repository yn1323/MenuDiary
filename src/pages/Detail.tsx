import React, { useEffect } from 'react'
import { StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import { Text, Container, Content, H1, H3, View } from 'native-base'
import { PostState, Ingredients } from '../store/post'
import { useSelector } from 'react-redux'

// component
import Tags from '../containers/fragments/Tags'
import Hr from '../containers/fragments/Hr'

// type
import { State } from '../../types'

// style
import globalStyle from '../styles/global'

export default (): JSX.Element => {
  const height = Dimensions.get('window').height + 20
  const {
    title,
    tags,
    regDate,
    img,
    ingredients,
    recipe,
    comment,
  } = useSelector((state: State): PostState => state.post)

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
    <Container>
      <Content padder>
        <View style={{ height }}>
          {/* タイトル */}
          <View style={[globalStyle.center_vh, { height: 50 }]}>
            <H1>{title}</H1>
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
            source={{ uri: require('../../assets/icons/main.png') }}
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
            <Text>{comment}</Text>
          </View>
        </View>
      </Content>
    </Container>
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
