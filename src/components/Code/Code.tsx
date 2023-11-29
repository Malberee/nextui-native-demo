import React, { FC } from 'react'
import { CodeWrapper, CodeContent } from './Code.styled'

import { CodeProps } from './Code.types'

const Code: FC<CodeProps> = ({ content, size, color, radius }) => {
  return (
    <CodeWrapper color={color} radius={radius}>
      <CodeContent size={size} color={color}>
        {content}
      </CodeContent>
    </CodeWrapper>
  )
}

export default Code
