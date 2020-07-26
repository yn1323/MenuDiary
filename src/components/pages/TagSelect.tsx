import React from 'react'
import { StyleSheet } from 'react-native'
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
import { useDispatch, useSelector } from 'react-redux'
import { Actions } from 'react-native-router-flux'

// constraint
import { tags } from '../../constraints'

// component
import Scroll from '../templates/Scroll'

//global
import { secondary } from '../../styles/global'

import { setEdit } from '../../store/edit'
import { setSearch } from '../../store/search'
import { State } from '../../types'

type Props = {
  isTagSet: boolean
}

export default ({ isTagSet }: Props): JSX.Element => {
  const dispatch = useDispatch()
  const store = useSelector((state: State) => state)

  const commit = (tag: string) => {
    alert(`clicked: ${tag}`)
    // store追加
    if (isTagSet) {
      dispatch(setEdit({ ...store.state, tag: tag }))
    } else {
      dispatch(setSearch({ ...store.search, tag: tag }))
    }
    // 遷移先
    Actions[isTagSet ? 'Edit' : 'Timeline']()
  }

  return (
    <Scroll extraMargin={165}>
      <List>
        {tags.map((tag, i) => {
          return (
            <ListItem key={i} thumbnail first onPress={() => commit(tag.tag)}>
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
