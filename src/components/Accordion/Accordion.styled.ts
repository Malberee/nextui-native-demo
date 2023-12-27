import { css } from 'styled-components'
import styled from 'styled-components/native'
import { useAccordionContext } from './hooks/useAccordionContext'
import useAccordionVariantStyles from './hooks/useAccordionVariantStyles'

export const AccordionWrapper = styled.View(() => {
  const { isCompact, variant } = useAccordionContext()

  return css`
    width: 100%;
    padding: 0 ${isCompact ? 8 : 16}px;
    display: flex;
    gap: ${variant === 'splitted' ? 8 : 0}px;
    flex-direction: column;
    border-radius: 12px;
    ${variant !== 'splitted' && useAccordionVariantStyles(variant)}
  `
})
