import styled, { css } from 'styled-components/native'
import { useBadge } from './Badge.context'
import { useAvatarGroup } from '../AvatarGroup/AvatarGroup.context'
import { getColor, getSize } from '../../utils'
import { sizes } from './Badge.constants'
import { Placement, Shape } from './Badge.types'
import { SizeName } from '../../types'

const getPlacement = (placement: Placement, width: number, shape: Shape) => {
  const placements = placement.split('-')

  return `
    ${placements[0]}: -${
      getSize(sizes, width) / (shape === 'circle' ? 6 : 4)
    }px;
    ${placements[1]}: -${
      getSize(sizes, width) / (shape === 'circle' ? 6 : 2.5)
    }px;
  `
}

export const BadgeWrapper = styled.View``

export const BadgeOutline = styled.View(() => {
  const {
    width = 0,
    size = 'md',
    showOutline = true,
    shape = 'circle',
    placement = 'top-right',
    isDot,
  } = useBadge()
  return css`
    position: absolute;
    ${getPlacement(placement, width, shape)}

    min-width: ${getSize(sizes, isDot ? 12 : size) + 2}px;
    min-height: ${getSize(sizes, isDot ? 12 : size) + 2}px;
    border-radius: 9999px;
    padding: 2px;

    background-color: ${showOutline ? '#ffffff' : 'transparent'};
  `
})

export const BadgeInner = styled.View(() => {
  const { color = 'default' } = { ...useAvatarGroup(), ...useBadge() }

  return css`
    width: 100%;
    height: 100%;
    padding-top: 1px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 1px;
    border-radius: 9999px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${getColor(color)};
  `
})

export const BadgeText = styled.Text(() => {
  const { size = 'md' } = useBadge()

  return css`
    font-size: ${size === 'sm' ? 12 : 14}px;
    line-height: ${size === 'sm' ? 14 : 16}px;
    color: #ffffff;
  `
})
