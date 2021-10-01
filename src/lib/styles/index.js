/** 미디어쿼리 Value */
export const mediaValue = {
  xlarge: 1200,
  large: 1080,
  medium: 768,
  small: 576,
  xsmall: 375,
};

/** 미디어쿼리 프리셋 */
export const mediaQuery = {
  xlarge: `@media (min-width: ${mediaValue.xlarge}px)`,
  large: `@media (min-width: ${mediaValue.large}px)`,
  medium: `@media (min-width: ${mediaValue.medium}px)`,
  small: `@media (min-width: ${mediaValue.small}px)`,
  xsmall: `@media (min-width: ${mediaValue.xsmall}px)`,
};

/** 색상표 */
export const palette = {
  white: '#ffffff',
  black: '#000000',

  /* Primary Color */
  primary: 'linear-gradient(to right, #81D0EE, #BAA5FB 25%, #E16DBF 75%, #F86D83);',

  /* Secondary Color */
  secondary_blue: '#94CBEB',
  secondary_purple: '#BC9BEA',
  secondary_pink: '#CD7DC7',
  secondary_red: '#E37590',

  /* Semantic Color */
  semantic: {
    warning: '#FD6BB6',
  },

  /* Font Color */
  font: {
    primary: '#3a3a3a',
    secondary: '#6E6B84',
  },

  /* Backgroud Color */
  background: {
    bg1: '#0A0511',
    bg2: '#222036',
  },
};

/** z-index 프리셋 */
export const zIndex = {
  header: 75,
  footer: 50,
  modal: 100,
  toast: 200,
  loading: 500,
};

/**
 * Enable only hover
 * @example
 * ${onlyHover} {
 *   &:hover { ... }
 * }
 * &:active { ... }
 */
export const onlyHover = `@media (hover: hover) and (pointer: fine), only screen and (-ms-high-contrast: active), (-ms-high-contrast: none)`;
