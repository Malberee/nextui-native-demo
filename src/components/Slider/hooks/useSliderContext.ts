import { createContext, useContext } from 'react'
import { SliderContextProps } from '../Slider.types'
import { defaultProps } from './useSliderProps'

export const SliderContext = createContext<SliderContextProps>(defaultProps)

export const useSliderContext = () => {
  return useContext<SliderContextProps>(SliderContext)
}
