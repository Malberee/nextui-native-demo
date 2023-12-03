export type RadiusName = 'none' | 'sm' | 'md' | 'lg' | 'full'
export type Radii = {
  [key in RadiusName]: number
}

export type ColorName =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'

export type SizeName =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | 'full'
export type CommonSizes = {
  [key in SizeName]: number
}
export type RestrictedSizes = {
  [key in Extract<SizeName, 'sm' | 'md' | 'lg'>]: number
}
export type Sizes = RestrictedSizes | CommonSizes

export type VariantName =
  | 'solid'
  | 'faded'
  | 'bordered'
  | 'light'
  | 'flat'
  | 'shadow'
export type Variants = {
  [key in VariantName]: string
}
