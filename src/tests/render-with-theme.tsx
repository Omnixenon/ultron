/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, RenderResult } from '@testing-library/react'
import { UltronProvider } from '@theme/ultron-provider'

export const renderWithTheme = async (element: React.ReactElement) => {
  let result: RenderResult | undefined
  await act(async () => {
    result = render(
      <UltronProvider withGlobalStyles theme={{}}>
        {element}
      </UltronProvider>
    )
  })
  return result
}

export const actAsync = async (callback: () => void) => {
  await act(async () => callback())
}
