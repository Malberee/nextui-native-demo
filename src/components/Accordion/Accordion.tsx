import React, { FC } from 'react'
import { AccordionWrapper } from './Accordion.styled'

import { AccordionProps } from './Accordion.types'
import { AccordionContext } from './hooks/useContext'
import useProps from './hooks/useProps'

const Accordion: FC<AccordionProps> = ({ children, ...props }) => {
  const accordionProps = useProps(props)

  return (
    <AccordionContext.Provider value={accordionProps}>
      <AccordionWrapper>{children}</AccordionWrapper>
    </AccordionContext.Provider>
  )
}

export default Accordion
