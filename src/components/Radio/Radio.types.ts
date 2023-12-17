import { ReactNode } from 'react'
import { ColorName, SizeName } from '../../types'
import { CSSProperties } from 'styled-components/native'

type Styles = {
  wrapper?: CSSProperties
  content?: CSSProperties
  label?: CSSProperties
  description?: CSSProperties
}

export interface RadioProps {
  label?: ReactNode
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'>
  color?: ColorName
  value: string
  description?: ReactNode
  isDisabled?: boolean
  isRequired?: boolean
  isReadOnly?: boolean
  isInvalid?: boolean
  disableAnimation?: boolean
  styles?: Styles
}

export interface RadioContextProps
  extends Required<
    Pick<RadioProps, 'size' | 'color' | 'isDisabled' | 'value' | 'isInvalid'>
  > {
  selectedRadio?: string
}
