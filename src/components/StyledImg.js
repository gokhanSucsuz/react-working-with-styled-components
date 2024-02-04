import { FaApple } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
from{
transform: rotate(0deg);
}
to{
transform: rotate(360deg);
}
`;
export const FaAppleIcon = styled(FaApple)`
  font-size: 50px;
  animation: ${rotate} 3s linear infinite;
  color: ${(props) => props.theme.colors.apple};
`;

export const StyledImg = styled.img`
  width: 100%;
  padding: 4px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 4px;

  &:hover {
    animation: ${rotate} 10s linear infinite;
  }
`;
