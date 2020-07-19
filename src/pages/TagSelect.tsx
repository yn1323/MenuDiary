import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Button, Text, View, Icon } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'

// reducer
import { delTag, changeTagOrder, TagState } from '../store/tag'

// component
import Scroll from '../templates/Scroll'

// type
import { State } from '../types/state'

export default (): JSX.Element => {
  const dispatch = useDispatch()
  const tags = useSelector((state: State) => state.tag)

  const renderTags = () =>
    tags.map(({ tag, id }: TagState, index: number) => (
      <View key={id} style={styles.row}>
        <Button
          transparent
          disabled={index === 0}
          onPress={() =>
            dispatch(changeTagOrder({ from: index, to: index - 1 }))
          }
        >
          <Icon name="arrow-up" />
        </Button>
        <Button
          transparent
          disabled={index === tags.length - 1}
          onPress={() =>
            dispatch(changeTagOrder({ from: index, to: index + 1 }))
          }
        >
          <Icon name="arrow-down" />
        </Button>
        <Button style={{ flexGrow: 20 }}>
          <Text>{tag}</Text>
        </Button>
        <Button transparent onPress={() => dispatch(delTag({ id }))}>
          <Icon name="trash" />
        </Button>
      </View>
    ))

  return <Scroll disableScroll>{renderTags()}</Scroll>
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    height: 40,
  },
})
