import { createContext, useContext } from 'react'
import { AvatarGroupContextProps } from '../AvatarGroup.types'

export const AvatarGroupContext = createContext<AvatarGroupContextProps>({})

export const useAvatarGroupContext = () => {
  return useContext<AvatarGroupContextProps>(AvatarGroupContext)
}
