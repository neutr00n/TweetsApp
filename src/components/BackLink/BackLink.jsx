import { NavigLink } from "./BackLink.styled";

export const BackLink = ({ to, children }) => {
  return <NavigLink to={to}>{children}</NavigLink>;
};
