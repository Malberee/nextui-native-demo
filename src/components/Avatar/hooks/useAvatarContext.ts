import { createContext, useContext } from 'react'
import { AvatarContextProps } from '../Avatar.types'
import { defaultProps } from './useAvatarProps'

export const AvatarContext = createContext<AvatarContextProps>(defaultProps)

export const useAvatarContext = () => {
  return useContext<AvatarContextProps>(AvatarContext)
}
