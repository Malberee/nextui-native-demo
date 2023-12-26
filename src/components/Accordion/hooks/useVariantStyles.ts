import { css } from 'styled-components'
import { Variant } from '../Accordion.types'
import useColors from '../../ThemeProvider/hooks/useColors'

const useVariantStyles = (variant: Variant) => {
  const { colors } = useColors()

  const styles = {
    light: '',
    shadow: css`
      background-color: ${colors.background};
      border-color: ${colors.default200};
      border-width: 1px;
      elevation: 10;
    `,
    bordered: css`
      border-color: ${colors.default200};
      border-width: 2px;
    `,
    splitted: css`
      padding: 0 16px;
      border-radius: 12px;
      background-color: ${colors.background};
      border-color: ${colors.default200};
      border-width: 1px;
      elevation: 10;
    `,
  }

  return styles[variant]
}

export default useVariantStyles
