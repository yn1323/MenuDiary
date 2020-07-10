import React, { memo, useMemo } from 'react'
import { Image, StyleSheet } from 'react-native'
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base'

// component
import Tags from '../fragments/Tags'

import globalStyle from '../../styles/global'

interface Props {
  icon: string
  img: string
  menuName: string
  tags: string[]
  likes: number
  comments: string[]
  regDate: string
}

type AllProps = Readonly<Props>

export default memo(
  ({
    icon,
    img,
    menuName,
    tags,
    likes,
    comments,
    regDate,
  }: Props): JSX.Element => {
    return (
      <Card>
        <CardItem style={[globalStyle.background]}>
          <Left>
            <Thumbnail source={icon} />
            <Body>
              <Text>{menuName}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem style={[globalStyle.background]}>
          <Tags tags={tags} />
        </CardItem>
        <CardItem cardBody>
          <Image source={img} style={styles.image} />
        </CardItem>
        <CardItem style={globalStyle.background}>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>{likes}</Text>
            </Button>
          </Left>
          <Left>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>{comments.length}</Text>
            </Button>
          </Left>
          <Right>
            <Text>{regDate}</Text>
          </Right>
        </CardItem>
      </Card>
    )
  },
)

const styles = StyleSheet.create({
  image: {
    height: 250,
    flex: 1,
  },
  btn: {
    marginRight: 5,
  },
})
