import React, { FC } from 'react'
import { Text } from 'react-native'
import { AccordionWrapper } from './Accordion.styled'

import { AccordionProps } from './Accordion.types'

const Accordion: FC<AccordionProps> = () => {
  return (
    <AccordionWrapper>
      <Text>Accordion Component</Text>
    </AccordionWrapper>
  )
}

export default Accordion
