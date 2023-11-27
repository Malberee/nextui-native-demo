import { createContext, useContext } from 'react'
import { AvatarProps } from './Avatar.types'

export const AvatarContext = createContext<AvatarProps>({})

export const useAvatar = () => {
    return useContext(AvatarContext)
}