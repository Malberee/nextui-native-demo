import { createContext, useContext } from 'react'
import { CircularProgressContextProps } from '../CircularProgress.types'
import { defaultProps } from './useCircularProgressProps'

export const CircularProgressContext =
  createContext<Required<CircularProgressContextProps>>(defaultProps)

export const useCircularProgressContext = () => {
  return useContext<Required<CircularProgressContextProps>>(
    CircularProgressContext,
  )
}
