import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;
  padding: 5px;

  font-weight: 600;
  color: #fff;
  background-color: #777777;
  box-shadow: 0px 5px 5px 0px rgba(35, 33, 33, 0.5) inset;

  border: 1px solid black;
  border-radius: 8px;
  transition: background-color 200ms linear;

  :hover:not(.active),
  :focus:not(.active) {
    background-color: #0d17a7;
  }
`;
