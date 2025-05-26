import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Logo from '../bioscholar_logo.png';

export default function Navbar() {
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Documents', id: 'documents' },
    { label: 'Presentations', id: 'presentations' },
    { label: 'Milestones', id: 'milestones' },
    { label: 'Domain', id: 'domain' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  // Background fade on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Improved scroll-spy: highlight the section whose top is above the viewport center
  useEffect(() => {
    const handleScrollSpy = () => {
      const triggerLine = window.scrollY + window.innerHeight / 2;
      let current = 'home';

      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= triggerLine) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // initialize on mount
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [navLinks]);

  // Smooth scroll handler
  const handleClick = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'about') {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? 'rgba(0,0,0,0.5)' : 'transparent',
        transition: 'background-color 0.3s',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <img src={Logo} alt="Logo" style={{ width: 48 }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
              color: 'white',
              ml: 2,
            }}
          >
            BioScholar
          </Typography>
        </Box>

        <Box
          component="nav"
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
          }}
        >
          {navLinks.map(({ label, id }) => {
            const isActive = active === id;
            return (
              <Button
                key={id}
                onClick={() => handleClick(id)}
                sx={{
                  whiteSpace: 'nowrap',
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                  fontWeight: 'bold',
                  color: isActive ? 'lime' : 'white',
                  mx: 0.5,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  border: isActive ? '1px solid lime' : '1px solid transparent',
                  transition: 'all 0.2s',
                  '&:hover': {
                    color: 'lime',
                    border: '1px solid lime',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                {label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
