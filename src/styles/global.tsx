import { StyleSheet } from 'react-native'

export const primary = '#3DB680'
export const secondary = '#E6855E'
export const inactive = '#c1c1c1'
export const gray = '#555'
export const backgroundColor = primary

export default StyleSheet.create({
  background: {
    backgroundColor,
  },
  headline: {
    color: '#555',
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
