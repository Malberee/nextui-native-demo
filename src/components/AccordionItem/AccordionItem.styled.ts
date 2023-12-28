import { css } from 'styled-components'
import styled from 'styled-components/native'
import { useAccordionItemContext } from './hooks/useAccordionItemContext'
import useColors from '../ThemeProvider/hooks/useColors'
import Animated from 'react-native-reanimated'
import { Text } from 'react-native'
import useAccordionVariantStyles from '../Accordion/hooks/useAccordionVariantStyles'

export const AccordionItemWrapper = styled.View(() => {
  const { variant, isDisabled } = useAccordionItemContext()

  return css`
    overflow: hidden;
    ${variant === 'splitted' && useAccordionVariantStyles(variant)}
    opacity: ${isDisabled ? 0.5 : 1};
  `
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
    margin-left: 4px;
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

export const ContentWrapper = styled(Text)(() => {
  const { isCompact } = useAccordionItemContext()
  const { colors } = useColors()

  return css`
    position: absolute;
    color: ${colors.foreground};
    padding: ${isCompact ? 8 : 16}px 0;
  `
})
