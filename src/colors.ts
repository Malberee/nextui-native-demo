export type ColorTheme = {
  [key: string]: string
}

const sharedColors = {
  white: '#FFFFFF',
  black: '#000000',
}

type SharedColors = typeof sharedColors

export type TColors = ColorTheme & SharedColors

type ColorPalettes = {
  light: TColors
  dark: TColors
}

const Colors: ColorPalettes = {
  light: {
    // layout
    background: '#FFFFFF',
    foreground: '#11181C',
    divider: 'rgba(17, 17, 17, 0.15)',
    focus: '#006FEE',

    // content
    content1: '#FFFFFF',
    content2: '#f4f4f5',
    content3: '#e4e4e7',
    content4: '#d4d4d8',

    // base
    default: '#d4d4d8',
    primary: '#006FEE',
    secondary: '#7828C8',
    success: '#17C964',
    warning: '#F5A524',
    danger: '#F31260',

    // default
    default50: '#fafafa',
    default100: '#f4f4f5',
    default200: '#e4e4e7',
    default300: '#d4d4d8',
    default400: '#a1a1aa',
    default500: '#71717a',
    default600: '#52525b',
    default700: '#3f3f46',
    default800: '#27272a',
    default900: '#18181b',

    // primary
    primary50: '#e6f1fe',
    primary100: '#cce3fd',
    primary200: '#99c7fb',
    primary300: '#66aaf9',
    primary400: '#338ef7',
    primary500: '#006FEE',
    primary600: '#005bc4',
    primary700: '#004493',
    primary800: '#002e62',
    primary900: '#001731',

    // secondary
    secondary50: '#f2eafa',
    secondary100: '#e4d4f4',
    secondary200: '#c9a9e9',
    secondary300: '#ae7ede',
    secondary400: '#9353d3',
    secondary500: '#7828c8',
    secondary600: '#6020a0',
    secondary700: '#481878',
    secondary800: '#301050',
    secondary900: '#180828',

    // success
    success50: '#e8faf0',
    success100: '#d1f4e0',
    success200: '#a2e9c1',
    success300: '#74dfa2',
    success400: '#45d483',
    success500: '#17c964',
    success600: '#12a150',
    success700: '#0e793c',
    success800: '#095028',
    success900: '#052814',

    // warning
    warning50: '#fefce8',
    warning100: '#fdedd3',
    warning200: '#fbdba7',
    warning300: '#f9c97c',
    warning400: '#f7b750',
    warning500: '#f5a524',
    warning600: '#c4841d',
    warning700: '#936316',
    warning800: '#62420e',
    warning900: '#312107',

    // danger
    danger50: '#fee7ef',
    danger100: '#fdd0df',
    danger200: '#faa0bf',
    danger300: '#f871a0',
    danger400: '#f54180',
    danger500: '#f31260',
    danger600: '#c20e4d',
    danger700: '#920b3a',
    danger800: '#610726',
    danger900: '#310413',

    // shared
    ...sharedColors,
  },
  dark: {
    // layout
    background: '#000000',
    foreground: '#ECEDEE',
    divider: 'rgba(255, 255, 255, 0.15)',
    focus: '#006FEE',

    // content
    content1: '#18181b',
    content2: '#27272a',
    content3: '#3f3f46',
    content4: '#52525b',

    // base
    default: '#3f3f46',
    primary: '#006FEE',
    secondary: '#9353d3',
    success: '#17c964',
    warning: '#f5a524',
    danger: '#f31260',

    // default
    default50: '#18181b',
    default100: '#27272a',
    default200: '#3f3f46',
    default300: '#52525b',
    default400: '#71717a',
    default500: '#a1a1aa',
    default600: '#d4d4d8',
    default700: '#e4e4e7',
    default800: '#f4f4f5',
    default900: '#fafafa',

    // primary
    primary50: '#001731',
    primary100: '#002e62',
    primary200: '#004493',
    primary300: '#005bc4',
    primary400: '#006FEE',
    primary500: '#338ef7',
    primary600: '#66aaf9',
    primary700: '#99c7fb',
    primary800: '#cce3fd',
    primary900: '#e6f1fe',

    // secondary
    secondary50: '#180828',
    secondary100: '#301050',
    secondary200: '#481878',
    secondary300: '#6020a0',
    secondary400: '#7828c8',
    secondary500: '#9353d3',
    secondary600: '#ae7ede',
    secondary700: '#c9a9e9',
    secondary800: '#e4d4f4',
    secondary900: '#f2eafa',

    // success
    success50: '#052814',
    success100: '#095028',
    success200: '#0e793c',
    success300: '#12a150',
    success400: '#17c964',
    success500: '#45d483',
    success600: '#74dfa2',
    success700: '#a2e9c1',
    success800: '#d1f4e0',
    success900: '#e8faf0',

    // warning
    warning50: '#312107',
    warning100: '#62420e',
    warning200: '#936316',
    warning300: '#c4841d',
    warning400: '#f5a524',
    warning500: '#f7b750',
    warning600: '#f9c97c',
    warning700: '#fbdba7',
    warning800: '#fdedd3',
    warning900: '#fefce8',

    // danger
    danger50: '#310413',
    danger100: '#610726',
    danger200: '#920b3a',
    danger300: '#c20e4d',
    danger400: '#f31260',
    danger500: '#f54180',
    danger600: '#f871a0',
    danger700: '#faa0bf',
    danger800: '#fdd0df',
    danger900: '#fee7ef',

    // shared
    ...sharedColors,
  },
}

export default Colors
