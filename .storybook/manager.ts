import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

import defaultColors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import Logo from './logo.svg';

const theme = create({
  base: 'light',
  brandTitle: 'Spark | Surge Studio Design System',
  brandUrl: 'https://www.surge.studio/',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  brandImage: Logo,
  brandTarget: '_self',

  appBg: defaultColors.zinc[200],
  appBorderColor: defaultColors.zinc[200],
  appBorderRadius: 0,
  appContentBg: defaultColors.zinc[50],

  barBg: defaultColors.zinc[200],
  barSelectedColor: defaultColors.zinc[900],
  barTextColor: defaultColors.zinc[900],

  booleanBg: defaultColors.zinc[200],
  booleanSelectedBg: defaultColors.zinc[300],

  buttonBg: defaultColors.zinc[200],
  buttonBorder: defaultColors.zinc[300],

  colorPrimary: defaultColors.zinc[900],
  colorSecondary: defaultColors.zinc[900],

  fontBase: defaultTheme.fontFamily.sans.join(', '),
  fontCode: defaultTheme.fontFamily.mono.join(', '),

  inputBg: defaultColors.white,
  inputBorder: defaultColors.zinc[300],
  inputBorderRadius: 4,
  inputTextColor: defaultColors.zinc[900],

  textColor: defaultColors.zinc[900],
  textInverseColor: defaultColors.zinc[100],
  textMutedColor: defaultColors.zinc[500],
});

addons.setConfig({
  theme,
  enableShortcuts: false,
});
