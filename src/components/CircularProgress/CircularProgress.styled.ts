import { ReText } from 'react-native-redash'
import { css } from 'styled-components'
import styled from 'styled-components/native'

export const CircularProgressWrapper = styled.View``

export const ValueLabelWrapper = styled.View(() => {
  return css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  `
})

export const ValueLabel = styled(ReText)(() => {
  return css`
    text-align: center;
  `
})
