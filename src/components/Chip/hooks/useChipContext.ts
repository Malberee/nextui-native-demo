import { createContext, useContext } from 'react'
import { UseChipProps } from '../Chip.types'

export const ChipContext = createContext<UseChipProps>({})

export const useChipContext = () => {
  return useContext<UseChipProps>(ChipContext)
}
