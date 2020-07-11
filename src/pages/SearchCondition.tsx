import React, { useState, useCallback } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import {
  View,
  Button,
  Text,
  Form,
  Content,
  Item,
  Label,
  Input,
  List,
  ListItem,
  Left,
} from 'native-base'
import { Calendar } from 'react-native-calendars'
import { Actions } from 'react-native-router-flux'

// component
import Scroll from '../templates/Scroll'

type Selection = 'word' | 'tag' | 'term'
const initialSelection: Selection = 'term'

interface SelectButton {
  text: string
  key: string
}
const selectButton: SelectButton[] = [
  { text: 'ワード検索', key: 'word' },
  { text: 'タグ検索', key: 'tag' },
  { text: '期間検索', key: 'term' },
]

interface Search {
  word: string
  tag: string
  term: {
    from: string
    to: string
  }
}
const initialSearch: Search = {
  word: 'dadas',
  tag: '',
  term: {
    from: '2020-07-01',
    to: '2020-07-10',
  },
}

const height = Dimensions.get('window').height - 130

const tags = ['hoge', 'moge', 'ohiru', 'niku']

export default (): JSX.Element => {
  const [selected, setSelected] = useState(initialSelection)
  const [search, setSearch] = useState(initialSearch)

  const buttonRender = useCallback(
    () =>
      selectButton.map(({ text, key }) => (
        <Button
          info
          block
          key={key}
          style={styles.button}
          bordered={key === selected}
          onPress={() => setSelected(key)}
        >
          <Text>{text}</Text>
        </Button>
      )),
    [selected],
  )

  const renderWordSearch = () => (
    <Item stackedLabel>
      <Label>検索ワード</Label>
      <Input
        onChangeText={(text) => setSearch({ ...search, word: text })}
        value={search.word}
        maxLength={128}
      />
    </Item>
  )

  const setTag = (tag) => {
    // TODO: setSearchが非同期で動いている点に注意
    setSearch({ ...search, tag: tag })
    onSubmit()
  }
  const renderTagSearch = () => (
    <List>
      {tags.map((tag) => (
        <ListItem onPress={() => setTag(tag)} key={tag}>
          <Left>
            <Text>{tag}</Text>
          </Left>
        </ListItem>
      ))}
    </List>
  )
  const renderTermSearch = () => {
    const from = {}
    from[search.term.from] = { selected: true }
    const to = {}
    to[search.term.to] = { selected: true }

    return (
      <>
        <Calendar
          key={1}
          current={new Date()}
          monthFormat={'yyyy MM'}
          markedDates={{ ...from }}
          onDayPress={(day) =>
            setSearch({
              ...search,
              term: { from: day.dateString, to: search.term.to },
            })
          }
        />
        <Calendar
          key={1}
          current={new Date()}
          monthFormat={'yyyy MM'}
          markedDates={{ ...to }}
          onDayPress={(day) =>
            setSearch({
              ...search,
              term: { from: search.term.from, to: day.dateString },
            })
          }
        />
      </>
    )
  }

  const renderHandler = {
    word: renderWordSearch,
    tag: renderTagSearch,
    term: renderTermSearch,
  }

  const onSubmit = () => {
    Actions.Search()
  }

  return (
    <Scroll disableScroll>
      {/* 検索種別 */}
      <View style={styles.header}>{buttonRender()}</View>
      <View style={styles.form}>
        {/* 検索条件 */}
        <Form>
          <Content padder>{renderHandler[selected]()}</Content>
        </Form>
        {/* ボタン */}
        <View>
          {selected !== 'tag' ? (
            <Button block onPress={onSubmit}>
              <Text>保存</Text>
            </Button>
          ) : (
            <></>
          )}
        </View>
      </View>
    </Scroll>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '32%',
  },
  form: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height,
  },
})
