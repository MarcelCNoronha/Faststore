module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mdx|ts|tsx)',
    './**/*.stories.@(js|jsx|mdx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-themes',
  ],
  staticDirs: ['../../../themes'],
}
