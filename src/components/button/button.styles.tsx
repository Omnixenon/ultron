import { ultronColor, ultronTheme, ultronTypography } from '@theme/index'
import styled from 'styled-components'

namespace S {
  export const ButtonRoot = styled.button`
    ${ultronTypography('button1')};
    background-color: ${ultronColor('indigo', 800)};
    color: ${ultronTheme('white')};
  `
}

export default S
