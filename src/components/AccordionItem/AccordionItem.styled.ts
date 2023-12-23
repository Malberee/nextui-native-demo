import { css } from 'styled-components'
import styled from 'styled-components/native'
import { useAccordionItemContext } from './hooks/useContext'

export const AccordionItemWrapper = styled.View(() => {
  return css``
})

export const AccordionItemHeader = styled.View(() => {
  const { isCompact } = useAccordionItemContext()

  return css`
    display: flex;
    justify-content: space-between;
    padding: 0 ${isCompact ? 8 : 16}px;
  `
})
