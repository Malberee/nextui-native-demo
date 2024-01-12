import React, { FC } from 'react'
import { CircularProgress as CircularProgressIcon } from 'nextui-native-icons'
import { CircularProgressWrapper } from './CircularProgress.styled'

import { CircularProgressProps } from './CircularProgress.types'
import useColors from '../ThemeProvider/hooks/useColors'
import useCircularProgressProps from './hooks/useCircularProgressProps'
import { getSize } from '../../utils/getSize'
import { sizes } from './CircularProgress.constants'

const CircularProgress: FC<CircularProgressProps> = (props) => {
  const { size, color } = useCircularProgressProps(props)
  const { colors } = useColors()
  const Size = getSize(sizes, size)

  return (
    <CircularProgressWrapper>
      <CircularProgressIcon
        trackColor={colors.default300}
        fillerColor={colors[color]}
        width={Size}
        height={Size}
        trackProps={{ strokeDasharray: 50 }}
        fillerProps={{ strokeDasharray: 50 }}
      />
    </CircularProgressWrapper>
  )
}

export default CircularProgress
