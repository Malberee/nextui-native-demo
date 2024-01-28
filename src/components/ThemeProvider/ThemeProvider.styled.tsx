import styled, { css } from 'styled-components/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export const Container = styled(GestureHandlerRootView)(() => {
  return css`
    flex: 1;
  `
})
