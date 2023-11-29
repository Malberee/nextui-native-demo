import styled, { css } from 'styled-components/native'
import { useBadgeContext } from './hooks/useBadgeContext'

export const BadgeWrapper = styled.View``

export const BadgeOutline = styled.View(() => {
  console.log(useBadgeContext())
  return css``
})

export const BadgeInner = styled.View(() => {
  return css``
})

export const BadgeContent = styled.Text(() => {
  return css``
})
