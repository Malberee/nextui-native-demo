import { createContext, useContext } from 'react'
import { BadgeContextProps } from '../Badge.types'
import { defaultProps } from './useBadgeProps'

export const BadgeContext = createContext<Required<BadgeContextProps>>(defaultProps)

export const useBadgeContext = () => {
  return useContext<Required<BadgeContextProps>>(BadgeContext)
}
