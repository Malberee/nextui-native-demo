import { createContext, useContext } from 'react'
import { BadgeContextProps } from '../Badge.types'

export const BadgeContext = createContext<BadgeContextProps>({})

export const useBadgeContext = () => {
  return useContext(BadgeContext)
}
