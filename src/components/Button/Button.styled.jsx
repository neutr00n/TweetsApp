import styled from "@emotion/styled";

export const Btn = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 14px;

  min-width: 196px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  text-transform: uppercase;

  color: #373737;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  cursor: pointer;

  background-color: ${({ children }) =>
    children === "Following" ? "#5CD3A8" : "#ebd8ff"};

  transition: box-shadow 200ms linear;

  :hover,
  :focus {
    box-shadow: 0px 5px 5px 0px rgba(35, 33, 33, 0.5) inset;
  }
`;
