import React from 'react';
import {StyledLink ,Nav} from '../styles/navBarStyled'

const NavBar = () => {
  return (
    <Nav>
      <StyledLink to="/editor" end>
        ✏️ עריכת קורות חיים
      </StyledLink>
      <StyledLink to="/preview">
        🧾 תצוגה
      </StyledLink>
      <StyledLink to="/settings">
        ⚙️ הגדרות
      </StyledLink>
    </Nav>
  );
};

export default NavBar;
