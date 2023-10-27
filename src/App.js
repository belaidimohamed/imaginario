import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './route';
import { ThemeProvider } from 'styled-components';
import { theme } from './infrastructure/theme';
import React, { useEffect , useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.user);
  const themeType = useSelector(state => state.theme.type)
  
  return (
    <div className="App" style={{background:theme(themeType).colors.background.default,color:theme(themeType).colors.text.primary}} >
      <ThemeProvider theme={theme(themeType)} >
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
