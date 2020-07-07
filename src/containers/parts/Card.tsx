import React, { memo } from 'react'
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
        <CardItem style={globalStyle.background}>
          <Left>
            <Thumbnail source={{ uri: icon }} />
            <Body>
              <Text>{menuName}</Text>
              <Text note>{tags.join(',')}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: img }} style={styles.image} />
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
})
