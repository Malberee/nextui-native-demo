import { css } from 'styled-components'
import styled from 'styled-components/native'
import { useAccordionContext } from './hooks/useContext'
import useVariantStyles from './hooks/useVariantStyles'

export const AccordionWrapper = styled.View(() => {
  const { isCompact, variant } = useAccordionContext()

  return css`
    width: 100%;
    padding: 0 ${isCompact ? 8 : 16}px;
    display: flex;
    gap: ${variant === 'splitted' ? 8 : 0}px;
    flex-direction: column;
    border-radius: 12px;
    ${variant !== 'splitted' && useVariantStyles(variant)}
  `
})
