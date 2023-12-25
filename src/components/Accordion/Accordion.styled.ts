import { css } from 'styled-components'
import styled from 'styled-components/native'
import { useAccordionContext } from './hooks/useContext'
import useVariantStyles from './hooks/useVariantStyles'

export const AccordionWrapper = styled.View(() => {
  const { isCompact, variant } = useAccordionContext()

  return css`
    width: 100%;
    padding: 0 ${isCompact ? 8 : 16}px;
    border-radius: 12px;
    ${useVariantStyles(variant)}
  `
})
