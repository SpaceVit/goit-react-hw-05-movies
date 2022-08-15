import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AddWrap = styled.div`
  padding: 35px;
  padding-left: 85px;
`;

export const Title = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  color: #25468e;
`;

export const Link = styled(NavLink)`
  padding: 10px;
  color: #25468e;
  text-decoration: none;
  &.active {
    color: white;
    text-decoration: underline;
  }
  &:hover:not(.active) {
    color: #ebeffa;
  }
`;

export const LinksWrap = styled.ul`
  display: flex;
`;

export const CastLink = styled.li`
  margin-right: 45px;
`;

export const BackLink = styled(NavLink)`
  padding: 10px;
  color: #25468e;
  text-decoration: none;
  margin-left: 35px;
  &.active {
    color: white;
    text-decoration: underline;
  }
  &:hover:not(.active) {
    color: #ebeffa;
  }
`;
