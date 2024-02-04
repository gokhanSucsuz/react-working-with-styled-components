import { Button } from "./components/Button"
import { CoolButton, StrongButton, SubmitButton } from "./components/Button/Button.styled"
import { StyledContainer } from "./components/styled"
import {FaAppleIcon, StyledImg} from "./components/StyledImg"

function App() {
  return (
    <>
    <StyledContainer>
    <StyledImg src="https://picsum.photos/id/107/1200/300" />
      <FaAppleIcon  />
      <br/>
      <Button $primary className="btn mr-50">Click</Button>
        Click on the Vite and React logos to learn more
      <StrongButton $primary>Strong Button</StrongButton>
      <CoolButton as="a" href="https://www.google.com.tr" target="_blank">
        Cool Button
      </CoolButton>
      <SubmitButton>Submit Button</SubmitButton>
      </StyledContainer>
    </>
  )
}

export default App
