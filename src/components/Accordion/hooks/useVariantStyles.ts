import { css } from 'styled-components'
import { Variant } from '../Accordion.types'
import useColors from '../../ThemeProvider/hooks/useColors'

const useVariantStyles = (variant: Variant) => {
  const { colors } = useColors()

  const styles = {
    light: '',
    shadow: css`
      border-color: ${colors.default200};
      border-width: 1px;
    `,
    bordered: css`
      border-color: ${colors.default200};
      border-width: 2px;
    `,
    splitted: '',
  }

  return styles[variant]
}

export default useVariantStyles
