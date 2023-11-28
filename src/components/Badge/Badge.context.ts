import { createContext, useContext } from 'react'
import { BadgeProps } from './Badge.types'

export const BadgeContext = createContext<
  Omit<BadgeProps, 'children' | 'content'>
>({})

export const useBadge = () => {
  return useContext(BadgeContext)
}
