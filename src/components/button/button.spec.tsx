import smokeTest from '@tests/smoke-test'
import 'jest-styled-components'
import Button from './button'

describe('@x-ray/primitive/Button', () => {
  describe('running preliminary suite', () => {
    smokeTest(Button, {})
  })
})
