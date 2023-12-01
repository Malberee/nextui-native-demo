import { createContext, useContext } from 'react'
import { UseChipProps } from '../Chip.types'
import { defaultProps } from './useChipProps'

export const ChipContext = createContext<Required<UseChipProps>>(defaultProps)

export const useChipContext = () => {
  return useContext<Required<UseChipProps>>(ChipContext)
}
