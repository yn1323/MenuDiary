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
    const mapTags = () =>
      tags.map((tag, index) => (
        <Button small style={styles.btn} key={index}>
          <Text>{tag}</Text>
        </Button>
      ))

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
        <CardItem style={[globalStyle.background]}>{mapTags()}</CardItem>
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
