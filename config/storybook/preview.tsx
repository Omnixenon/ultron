import { UltronProvider } from '../../src/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
}

export const decorators = [
  Story => (
    <UltronProvider theme={{}} withGlobalStyles>
      <Story />
    </UltronProvider>
  ),
]
