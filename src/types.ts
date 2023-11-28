export type ColorName =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'

export type RadiusName = 'none' | 'sm' | 'md' | 'lg' | 'full'
export type Radii = {
  [key in RadiusName]: number
}

export type SizeName = 'sm' | 'md' | 'lg'
export type Sizes = {
  [key in SizeName]: number
}

export type VariantName =
  | 'solid'
  | 'faded'
  | 'bordered'
  | 'light'
  | 'flat'
  | 'ghost'
  | 'shadow'
export type Variants = {
  [key in VariantName]: string
}
