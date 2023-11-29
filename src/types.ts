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
export type Sizes =
  | {
      [key in SizeName]: number
    }
  | {
      [key in Pick<SizeName, 'sm' | 'md' | 'lg'>]: number
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

export type ColorScale = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  foreground: string // contrast color
  DEFAULT: string
}

export type BaseColors = {
  background: ColorScale // the page background color
  foreground: ColorScale // the page text color
  divider: ColorScale // used for divider and single line border
  overlay: ColorScale // used for modal, popover, etc.
  focus: ColorScale // used for focus state outline
  content1: ColorScale // used for card, modal, popover, etc.
  content2: ColorScale
  content3: ColorScale
  content4: ColorScale
}

// brand colors
export type ThemeColors = BaseColors & {
  default: ColorScale
  primary: ColorScale
  secondary: ColorScale
  success: ColorScale
  warning: ColorScale
  danger: ColorScale
}
