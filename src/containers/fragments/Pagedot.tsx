import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Button, Text } from 'native-base'
import { Desc } from '../../pages/Tutorial'

interface Props {
  selected: number
  all: Desc[]
}

export default ({ all, selected }: Props): JSX.Element => {
  return (
    <View style={styles.flex}>
      {all.map((_, i) =>
        i === selected ? (
          <Button rounded small style={styles.margin} info>
            <Text></Text>
          </Button>
        ) : (
          <Button rounded small style={styles.margin}>
            <Text></Text>
          </Button>
        ),
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  margin: {
    marginHorizontal: 15,
  },
})
