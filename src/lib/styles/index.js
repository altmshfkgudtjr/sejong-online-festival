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

  primary: 'linear-gradient(to right, #81D0EE, #BAA5FB 25%, #E16DBF 75%, #F86D83);',

  /* Primary Color */
  red005: '#ffebef',
  red010: '#ffcdd3',
  red020: '#f9999a',
  red030: '#f37073',
  red040: '#ff4b4e',
  red050: '#ff3431',
  red060: '#f62932',
  red070: '#e41b2b',
  red080: '#d70e23',
  red090: '#c80017',

  /* Secondary Color */
  blue005: '#e3f3ff',
  blue070: '#2277ff',

  yellow005: '#fffde5',
  yellow060: '#ffd912',
  yellow080: '#fea600',

  gblue005: '#e0f6fa',
  gblue070: '#0d92a3',

  /* Grey Color */
  grey005: '#f9f9f9',
  grey010: '#efefef',
  grey020: '#e9eaeb',
  grey030: '#dadbdc',
  grey040: '#b6b7b8',
  grey050: '#979899',
  grey060: '#6e6f70',
  grey070: '#5b5c5c',
  grey080: '#3a3a3a',
  grey090: '#1a1a1a',

  /* Font Color */
  font: {
    primary: '#3a3a3a',
    secondary: '#1a1a1a',
    tertiary1: '#6e6f70',
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
