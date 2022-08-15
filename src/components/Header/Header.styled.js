import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  justify-content: left;
  align-items: center;
  height: 40px;
  padding: 12px 24px;
  margin-bottom: 15px;
  background-image: linear-gradient(#1f3c7a, #7192da, #1f3c7a);
  box-shadow: rgb(0 0 0 / 70%) 5px 5px 13px 0px;
`;

export const Container = styled.ul`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 10px;
  font-size: 32px;
  font-weight: bold;
  color: #b5c6ec;
  text-decoration: none;
  &.active {
    color: white;
    text-decoration: underline;
  }
  &:hover:not(.active) {
    color: #ebeffa;
  }
`;
