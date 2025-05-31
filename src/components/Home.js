import React, { useEffect, useState, useRef } from 'react';
import { Typography, Box, Button, Container, Stack, Slide, useMediaQuery, useTheme } from '@mui/material';
import DNA from '../DNA.mp4';
import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import StorageIcon from '@mui/icons-material/Storage';
import About from './About';
import Documents from './Documents';
import Presentations from './Presentations';
import Milestones from './Milestones';
import Domain from './Domain';
import Achievements from './Achievements';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';
import Specifications from './Specifications';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const showContent = isVisible || isMobile;
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const section = document.getElementById('home-section');
    if (section) observer.observe(section);
    return () => { if (section) observer.unobserve(section); };
  }, []);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // Start playing forward initially
    vid.loop = false;
    vid.currentTime = 0;
    vid.play();

    let backInterval;

    // When video ends, pause and start manual reverse
    const handleEnded = () => {
      vid.pause();
      backInterval = setInterval(() => {
        if (vid.currentTime <= 0) {
          clearInterval(backInterval);
          vid.currentTime = 0;
          vid.play();            // play forward again
        } else {
          vid.currentTime = vid.currentTime - 0.04; // step back ~25fps
        }
      }, 40);
    };

    vid.addEventListener('ended', handleEnded);
    return () => {
      vid.removeEventListener('ended', handleEnded);
      clearInterval(backInterval);
    };
  }, []);

  const cards = [
    { Icon: SearchIcon,        label: 'Biological Knowledge Retrieval',      delay: 200 },
    { Icon: BarChartIcon,      label: 'Advanced Level Content Summarization', delay: 400 },
    { Icon: QuestionAnswerIcon, label: 'Biological Question Answering',      delay: 600 },
    { Icon: StorageIcon,       label: 'Knowledge Base of Biology Domain',     delay: 800 },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        id="home-section"
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <video
          ref={videoRef}
          src={DNA}
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -2,
            filter: 'brightness(50%)', // dark filter applied
          }}
        />

        <Slide direction="down" in={showContent} mountOnEnter timeout={500}>
          <Container
            maxWidth="xl"
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Slide direction="right" in={showContent} timeout={700}>
              <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
                BioScholar
              </Typography>
            </Slide>
            <Slide direction="left" in={showContent} timeout={900}>
              <Typography variant="h5" sx={{ color: 'white', mb: 4 }}>
                Excel In Biology With Confidence
              </Typography>
            </Slide>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
                width: '100%',
                px: 2,
                maxWidth: '100vw',
              }}
            >
              {cards.map(({ Icon, label, delay }) => (
                <Slide key={label} direction="up" in={showContent} timeout={delay}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      width: { xs: '90%', sm: '40%', md: '280px' },
                      height: { xs: 120, sm: 150 },
                      py: 2,
                      flexShrink: 0,
                      boxSizing: 'border-box',
                    }}
                  >
                    <Stack spacing={1} alignItems="center">
                      <Icon sx={{ color: '#4CAF50', fontSize: { xs: 32, sm: 40 } }} />
                      <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                        {label}
                      </Typography>
                    </Stack>
                  </Button>
                </Slide>
              ))}
            </Box>
          </Container>
        </Slide>
      </Box>

      {/* Page Sections */}
      <About />
      <Specifications/>
      <Domain />
      <Documents />
      <Presentations />
      <Milestones />
      <Achievements />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
