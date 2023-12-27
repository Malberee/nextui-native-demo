import React, { FC, Key, useEffect, useState } from 'react'
import { AccordionWrapper } from './Accordion.styled'

import { AccordionProps } from './Accordion.types'
import { AccordionContext } from './hooks/useAccordionContext'
import useAccordionProps from './hooks/useAccordionProps'
import Divider from '../Divider'
import { css } from 'styled-components/native'

const Accordion: FC<AccordionProps> = ({
  children,
  disabledKeys,
  defaultSelectedKeys,
  selectedKeys: selectKeys,
  selectionMode,
  showDivider = true,
  onSelectionChange,
  ...props
}) => {
  const [selectedKeys, setSelectedKeys] = useState<'all' | Key[]>(
    selectKeys || defaultSelectedKeys || [],
  )
  const accordionProps = useAccordionProps(props)

  useEffect(() => {
    setSelectedKeys(selectKeys || defaultSelectedKeys || [])
  }, [selectKeys, defaultSelectedKeys])

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selectedKeys)
    }
  }, [selectedKeys, onSelectionChange])

  const toggleAccordionItem = (key: Key) => {
    if (selectionMode === 'single') {
      setSelectedKeys([key])
      return
    }

    if (selectedKeys !== 'all') {
      setSelectedKeys(
        selectedKeys.includes(key)
          ? selectedKeys.filter((item) => item !== key)
          : [...selectedKeys, key],
      )
    }
  }

  const shouldRenderDivider =
    showDivider && accordionProps.variant !== 'splitted'

  const AccordionsItems = React.Children.map(children, (child, index: any) => {
    return (
      <React.Fragment key={index}>
        {React.cloneElement(child as React.ReactElement, {
          index,
        })}
        {index < React.Children.count(children) - 1 && shouldRenderDivider && (
          <Divider
            styles={css`
              margin: 0;
            `}
          />
        )}
      </React.Fragment>
    )
  })

  return (
    <AccordionContext.Provider
      value={{ selectedKeys, toggleAccordionItem, ...accordionProps }}
    >
      <AccordionWrapper>{AccordionsItems}</AccordionWrapper>
    </AccordionContext.Provider>
  )
}

export default Accordion
