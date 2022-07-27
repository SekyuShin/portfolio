import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/layout/Header'

const getDesignTokens = () => ({
    palette: {    
        // palette values for dark mode
        primary: {
            main: '#5658DD',//deepPurple
        },
        secondary:{
            light: '#ECEDED',
            main: '#2A2D32' //Darkgrey deep100
        },
        background: {
            default: '#151719', //darkgrey deep150
        },
        text: {
            primary:  '#7D8790', //grey deep50
            secondary: '#ECEDED', //white
        },
        image:{
            height: '100%',
            width: '100%',
        }
            
    },
});
  const theme = createTheme(getDesignTokens());
//<Header navPosition="right" className="reveal-from-bottom" />
//<Footer />


const LayoutDefault = ({ children }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <Container fixed >
                <Header></Header>
                <>{children}</>
            </Container>
    </ThemeProvider>
  );
  
  export default LayoutDefault;  