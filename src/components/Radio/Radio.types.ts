import { ReactNode } from 'react'
import { ColorName, SizeName } from '../../types'
import { CSSProp } from 'styled-components'

export type Styles = Partial<
  Record<'wrapper' | 'content' | 'label' | 'description', CSSProp>
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
