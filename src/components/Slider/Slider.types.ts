import { ReactNode } from 'react'
import { ColorName, RadiusName, SizeName } from '../../types'

export type SliderStepMarks = {
  value: number
  label: string
}[]

export interface SliderProps {
  label?: ReactNode
  name?: string
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'>
  color?: ColorName
  radius?: RadiusName
  step?: number
  value?: number
  defaultValue?: number
  minValue?: number
  maxValue?: number
  orientation?: 'horizontal' | 'vertical'
  fillOffset?: number
  showSteps?: boolean
  showTooltip?: boolean
  marks?: SliderStepMarks
  startContent?: ReactNode
  endContent?: ReactNode
  //   formatOptions?:
  // tooltipValueFormatOptions?:
  //   tooltipProps?:
  showOutline?: boolean
  hideValue?: boolean
  hideThumb?: boolean
  disableThumbScale?: boolean
  isDisabled?: boolean
  disableAnimation?: boolean
}

export interface SliderContextProps
  extends Required<Omit<
    SliderProps,
    | 'label'
    | 'name'
    | 'value'
    | 'defaultValue'
    | 'fillOffset'
    | 'marks'
    | 'startContent'
    | 'endContent'
    | 'formatOptions'
    | 'tooltipValueFormatOptions'
    | 'tooltipProps'
  >> {}
