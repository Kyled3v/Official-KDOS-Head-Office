export const colors = {
  kdosBlue: '#0057FF',
  electricBlue: '#00AAFF',
  nearBlack: '#0A0A0F',
  deepNavy: '#0D1B2A',
  white: '#FFFFFF',
  neutral: {
    50: '#F8F9FA',
    100: '#F1F3F5',
    200: '#E9ECEF',
    300: '#DEE2E6',
    400: '#CED4DA',
    500: '#ADB5BD',
    600: '#6C757D',
    700: '#495057',
    800: '#343A40',
    900: '#212529',
  },
} as const

export const typography = {
  fontSans: ['Inter', 'system-ui', 'sans-serif'],
  fontMono: ['JetBrains Mono', 'monospace'],
} as const

export const animation = {
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
  workspace: 0.35,
} as const
