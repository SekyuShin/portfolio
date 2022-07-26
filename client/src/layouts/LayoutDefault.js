import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
const getDesignTokens = () => ({
    palette: {    
        // palette values for dark mode
        primary: {
            main:'#4A4BB8',//deepPurple
        },
        secondary:{
            main:'#2A2D32' //Darkgrey deep100
        },
        background: {
            default: '#151719', //darkgrey deep150
        },
        text: {
            primary:  '#7D8790', //grey deep50
            secondary: '#ECEDED', //white
        },
            
    },
});
  const theme = createTheme(getDesignTokens());
//<Header navPosition="right" className="reveal-from-bottom" />
//<Footer />


const LayoutDefault = ({ children }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <Container fixed >
                <>{children}</>
                <Button color="primary">test</Button>
            </Container>
    </ThemeProvider>
  );
  
  export default LayoutDefault;  