import { RadioStyles } from '../Radio.types'

const useCustomStyles = (
  isSelected: boolean,
  styles?: Partial<RadioStyles>,
) => {
  const {
    wrapper: { default: wrapperDefault, active: wrapperActive } = {},
    content: { default: contentDefault, active: contentActive } = {},
    label: { default: labelDefault, active: labelActive } = {},
    description: {
      default: descriptionDefault,
      active: descriptionActive,
    } = {},
  }: RadioStyles = (styles as RadioStyles) || {}

  return {
    wrapperStyles:
      `${wrapperDefault || ''}${(isSelected && wrapperActive) || ''}` ||
      undefined,
    contentStyles:
      `${contentDefault || ''}${(isSelected && contentActive) || ''}` ||
      undefined,
    labelStyles:
      `${labelDefault || ''}${(isSelected && labelActive) || ''}` || undefined,
    descriptionStyles:
      `${descriptionDefault || ''}${(isSelected && descriptionActive) || ''}` ||
      undefined,
  }
}

export default useCustomStyles
