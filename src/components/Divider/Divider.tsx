import React, { FC } from 'react'
import { DividerWrapper } from './Divider.styled'

import { DividerProps } from './Divider.types'

const Divider: FC<DividerProps> = ({ orientation = 'horizontal', styles }) => {
  // @ts-ignore
  return <DividerWrapper orientation={orientation} css={styles} />
}

export default Divider
