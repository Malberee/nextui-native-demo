import { CheckboxStyles } from '../Checkbox.types'

const useCheckboxCustomStyles = (
  isSelected: boolean,
  styles?: Partial<CheckboxStyles>,
) => {
  const {
    wrapper: { default: wrapperDefault, active: wrapperActive } = {},
    content: { default: contentDefault, active: contentActive } = {},
    label: { default: labelDefault, active: labelActive } = {},
  }: CheckboxStyles = (styles as CheckboxStyles) || {}

  return {
    wrapperStyles:
      `${wrapperDefault || ''}${(isSelected && wrapperActive) || ''}` ||
      undefined,
    contentStyles:
      `${contentDefault || ''}${(isSelected && contentActive) || ''}` ||
      undefined,
    labelStyles:
      `${labelDefault || ''}${(isSelected && labelActive) || ''}` || undefined,
  }
}

export default useCheckboxCustomStyles
