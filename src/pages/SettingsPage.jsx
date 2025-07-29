import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { Wrapper, ToggleButton } from '../styles/settingsStyles';

const SettingsPage = () => {
  const { toggleTheme, isDark } = useThemeContext();

  return (
    <Wrapper>
      <h2>הגדרות עיצוב</h2>
      <p>ערכת עיצוב נוכחית: <strong>{isDark ? 'כהה' : 'בהירה'}</strong></p>
      <ToggleButton onClick={toggleTheme}>
        עבור למצב {isDark ? 'בהיר' : 'כהה'}
      </ToggleButton>
    </Wrapper>
  );
};

export default SettingsPage;
