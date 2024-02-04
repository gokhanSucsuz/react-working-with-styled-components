import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #3498bd;
  border-radius: 7px;
  background-color: ${(props) => {
    console.log(props);
    return props?.$primary ? props.theme.colors.primary : "transparent";
  }};
  color: ${({ $primary, theme }) =>
    $primary ? theme.colors.textColor : "black"};

  &:hover {
    background-color: ${(props) => (props?.$primary ? "magenta" : "#445f5f")};
    color: ${(props) => (props?.$primary ? "#44fbef" : "white")};
  }
`;

export const StrongButton = styled(StyledButton)`
  border-width: 5px;
`;
export const CoolButton = styled(StyledButton)`
  background-image: linear-gradient(
    to right,
    #c21500 0%,
    #ffc500 51%,
    #c21500 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  text-decoration: none;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export const SubmitButton = styled(StrongButton).attrs({
  type: "submit"
})`
  font-size: 20px;
  color: red;
`;
