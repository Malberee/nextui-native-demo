import { Placement, Shape } from './Badge.types'
import { getSize } from '../../utils/getSize'
import { sizes } from './Badge.constants'

export const getPlacement = (
  placement: Placement,
  width: number,
  shape: Shape,
) => {
  const placements = placement.split('-')

  return `
    ${placements[0]}: -${
      getSize(sizes, width) / 4
    }px;
    ${placements[1]}: -${
      getSize(sizes, width) / (shape === 'circle' ? 4 : 2.5)
    }px;
  `
}
