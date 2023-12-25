import { css } from 'styled-components'
import styled from 'styled-components/native'
import { useAccordionItemContext } from './hooks/useContext'
import useColors from '../ThemeProvider/hooks/useColors'
import Animated from 'react-native-reanimated'

export const AccordionItemWrapper = styled.View(() => {
  return css``
})

export const AccordionItemHeader = styled.View(() => {
  const { isCompact } = useAccordionItemContext()

  return css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${isCompact ? 8 : 16}px 0;
  `
})

export const HeaderInner = styled.View(() => {
  return css`
    display: flex;
    flex-direction: row;
    gap: 12px;
  `
})

export const Title = styled.Text(() => {
  const { colors } = useColors()

  return css`
    color: ${colors.foreground};
  `
})

export const Subtitle = styled.Text(() => {
  const { colors } = useColors()

  return css`
    color: ${colors.default500};
  `
})

export const Indicator = styled(Animated.View)(() => {
  return css``
})

export const Content = styled.Text(() => {
  const { colors } = useColors()

  return css`
    /* position: absolute; */
    color: ${colors.foreground};
  `
})
