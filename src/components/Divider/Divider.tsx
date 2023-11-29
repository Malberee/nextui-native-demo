import React, { FC } from 'react'
import { DividerWrapper } from './Divider.styled'

import { DividerProps } from './Divider.types'

const Divider: FC<DividerProps> = ({ orientation = 'horizontal' }) => {
  return <DividerWrapper orientation={orientation} />
}

export default Divider
