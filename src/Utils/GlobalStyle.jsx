// libraries
import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Ubuntu, sans-serif;
}
 `

export default function GlobalStyle() {
  return <StyledGlobalStyle />
}
