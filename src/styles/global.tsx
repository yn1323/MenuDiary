import { StyleSheet } from 'react-native'

export const backgroundColor = '#3DB680'
export const secondary = '#E6855E'

export default StyleSheet.create({
  background: {
    backgroundColor,
  },
  headline: {
    color: '#232323',
  },
  paragraph: {
    color: '#222525',
  },
  text: {
    color: '#232323',
  },
  center_vh: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center_v: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})
