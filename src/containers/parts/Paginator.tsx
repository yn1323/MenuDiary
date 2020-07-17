import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import {
  Button,
  Icon,
  Left,
  Right,
  Segment,
  Body,
  Text,
  View,
} from 'native-base'

import globalStyle from '../../styles/global'

interface Props {
  from: number
  to: number
  all: number
}

export default memo(
  ({ from, to, all }: Props): JSX.Element => {
    const page = `${from} - ${to} / ${all}`

    const buttonSize = 0.25

    return (
      <View style={styles.space}>
        <Segment style={globalStyle.background}>
          <Left style={{ flex: buttonSize }}>
            <Button info rounded block>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 1 - buttonSize * 2 }}>
            <Text style={globalStyle.text}>{page}</Text>
          </Body>
          <Right style={{ flex: buttonSize }}>
            <Button info rounded block>
              <Icon name="arrow-forward" />
            </Button>
          </Right>
        </Segment>
      </View>
    )
  },
)
const styles = StyleSheet.create({
  space: {
    marginTop: 10,
  },
})
