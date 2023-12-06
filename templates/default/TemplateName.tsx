import React, { FC } from 'react'
import { Text } from 'react-native'
import { TemplateNameWrapper } from './TemplateName.styled'

import { TemplateNameProps } from './TemplateName.types'

const TemplateName: FC<TemplateNameProps> = () => {
  return (
    <TemplateNameWrapper>
      <Text>TemplateName Component</Text>
    </TemplateNameWrapper>
  )
}

export default TemplateName
