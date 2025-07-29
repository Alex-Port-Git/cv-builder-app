import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  direction: rtl;
  background-color: ${({ theme }) => theme.primary};
  padding: 1rem;
// position: fixed;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background 0.3s;

  &.active {
    background-color: ${({ theme }) => theme.secondary}99;
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondary}60;
  }
`;