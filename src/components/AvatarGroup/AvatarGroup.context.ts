import { createContext, useContext } from 'react'
import { AvatarGroupProps } from './AvatarGroup.types'

export const AvatarGroupContext = createContext<
  Omit<AvatarGroupProps, 'children' | 'isGrid' | 'renderCount'>
>({})

export const useAvatarGroup = () => {
  return useContext(AvatarGroupContext)
}
