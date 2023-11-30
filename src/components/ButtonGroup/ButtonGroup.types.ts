import { ReactNode } from 'react'
import { ButtonProps } from '../Button/Button.types'

export interface ButtonGroupProps
  extends Pick<
    ButtonProps,
    'variant' | 'color' | 'size' | 'radius' | 'fullWidth' | 'isDisabled'
  > {
  children: ReactNode | ReactNode[]
}
