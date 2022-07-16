import styled, { css } from 'styled-components'

const BUTTON_RESET = css`
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
`

namespace S {
  export const ButtonRoot = styled.button`
    ${BUTTON_RESET};
  `
}

export default S
