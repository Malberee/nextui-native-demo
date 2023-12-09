import { createContext, useContext } from 'react'
import { ProgressContextProps } from '../Progress.types'
import { defaultProps } from './useProgressProps'

export const ProgressContext = createContext<ProgressContextProps>(defaultProps)

export const useProgressContext = () => {
  return useContext<ProgressContextProps>(ProgressContext)
}
