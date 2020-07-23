import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {
  Icon,
  Text,
  List,
  ListItem,
  Body,
  Left,
  Right,
  Thumbnail,
} from 'native-base'

// constraint
import { tags } from '../../constraints'

// component
import Scroll from '../templates/Scroll'

//global
import { secondary } from '../../styles/global'

export default (): JSX.Element => {
  const commit = (tag: string) => {
    alert(`clicked: ${tag}`)
  }

  return (
    <Scroll extraMargin={165}>
      <List>
        {tags.map((tag) => {
          return (
            <ListItem thumbnail first onPress={() => commit(tag.tag)}>
              <Left>
                <Thumbnail square source={tag.img} />
              </Left>
              <Body>
                <Text>{tag.tag}</Text>
              </Body>
              <Right>
                <Icon style={styles.arrow} name="arrow-forward"></Icon>
              </Right>
            </ListItem>
          )
        })}
      </List>
    </Scroll>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: -200,
  },
  arrow: {
    color: secondary,
  },
})
