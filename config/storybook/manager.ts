import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const theme = create({
  base: 'dark',

  brandTitle: 'Ultron',
  // brandUrl: 'https://learnd.co.uk/',
  // brandImage:
  //   'https://learnd.co.uk/wp-content/uploads/2021/06/learnd-web-logo-white.svg',
  brandTarget: '_self',
})

const configToolbar = {
  isFullscreen: false,
  enableShortcuts: false,
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    title: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
}

addons.setConfig({
  theme,
  ...configToolbar,
})
