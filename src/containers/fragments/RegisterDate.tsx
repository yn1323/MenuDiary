import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Icon, View } from 'native-base'

import { inactive } from '../../styles/global'

interface Props {
  regDate: string
}

type AllProps = Readonly<Props>

export default memo(
  ({ regDate }: AllProps): JSX.Element => {
    return (
      <View style={styles.view}>
        <Icon name="create" style={styles.dateIcon}></Icon>
        <Text style={styles.date}> {regDate}</Text>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  dateIcon: {
    fontSize: 15,
    color: inactive,
  },
  date: {
    fontSize: 12,
    color: inactive,
  },
})
