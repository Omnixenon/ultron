import { render } from '@testing-library/react'
import React from 'react'

const smokeTest = <P extends object>(
  Component: React.ComponentType<P>,
  requiredProps: P
) => {
  it('running smoke test', () => {
    const element = render(<Component {...requiredProps} />)
    expect(element).toBeTruthy()
  })
}

export default smokeTest
