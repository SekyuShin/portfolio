import React from 'react';
import Button from '@mui/material/Button';
import Introduction from '../components/sections/Introduction';
import AboutMe from '../components/sections/AboutMe';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Career from '../components/sections/Career';
const Home = () => {
    return (
      <>
        <Introduction></Introduction>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <Career></Career>
      </>
    );
  }
  
  export default Home;