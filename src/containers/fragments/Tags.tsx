import React, { useMemo, memo } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text } from 'native-base'

interface Props {
  tags: string[]
}

export default memo(
  ({ tags }: Props): JSX.Element => {
    const buttonRender = useMemo(
      () =>
        tags.map((tag, index) => (
          <Button small style={styles.btn} key={index}>
            <Text>{tag}</Text>
          </Button>
        )),
      [tags],
    )

    return <>{buttonRender}</>
  },
)
const styles = StyleSheet.create({
  btn: {
    marginRight: 5,
  },
})
