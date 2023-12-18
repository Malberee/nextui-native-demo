import { ReactNode } from 'react'
import { ColorName, SizeName } from '../../types'
import { CSSProperties } from 'styled-components/native'

type StylesObject = {
  default?: CSSProperties
  active?: CSSProperties
}

export type Styles = Partial<
  Record<'wrapper' | 'content' | 'label' | 'description', StylesObject>
>

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
