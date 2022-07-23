import React from 'react'
import { renderWithTheme } from './render-with-theme'

const smokeTest = <P extends object>(
  Component: React.ComponentType<P>,
  requiredProps: P
) => {
  it('running smoke test', () => {
    const element = renderWithTheme(<Component {...requiredProps} />)
    expect(element).toBeTruthy()
  })
}

export default smokeTest
