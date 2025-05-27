import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton
} from '@mui/material';
import Grow from '@mui/material/Grow';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Lakmini from '../lakmini.png';
import Samadhir from '../samadhir.png';
import Kiriharan from '../Member/kiriharan.png'
import Manuja from '../Member/Manuja.png'
import Lasitha from '../Member/Lasitha.png'
import Hansi from '../Member/Hansi.png'

const members = [
  {
    name: 'Kiriharan Mohan',
    role: 'Researcher',
    desc: 'Bachelor of Science (Hons) in Information Technology Specializing in Data Science',
    img: Kiriharan
  },
  {
    name: 'Lasitha Bandara',
    role: 'Researcher',
    desc: 'Bachelor of Science (Hons) in Information Technology Specializing in Data Science',
    img: Lasitha
  },
  {
    name: 'Manuja Munasinghe',
    role: 'Researcher',
    desc: 'Bachelor of Science (Hons) in Information Technology Specializing in Data Science',
    img: Manuja
  },
  {
    name: 'Hansini Wijesinghe',
    role: 'Researcher',
    desc: 'Bachelor of Science (Hons) in Information Technology Specializing in Data Science',
    img: Hansi
  },
  {
    name: 'Dr. Lakmini Abeywardhana',
    role: 'Supervisor',
    desc: 'Senior Lecturer, Sri Lanka Institute of Information Technology',
    img: Lakmini
  },
  {
    name: 'Mr. Samadhi Rathnayake',
    role: 'Co-Supervisor',
    desc: 'Lecturer, Sri Lanka Institute of Information Technology',
    img: Samadhir
  }
];

const CARD_HEIGHT = 480;   // total card height
const IMAGE_HEIGHT = 280;  // image area height

export default function Team() {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  const iconStyle = {
    bgcolor: 'rgba(0,0,0,0.6)',
    color: '#fff',
    m: 0.5,
    '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
  };

  return (
    <Box
      id="team"
      ref={containerRef}
      sx={{
        flexGrow: 1,
        p: 2,
        px: { xs: 2, sm: 4, md: 20 },
        overflow: 'hidden'
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
      >
        Team
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {members.map((m, idx) => (
          <Grid item xs={12} sm={6} md={3} key={m.name}>
            <Grow in={inView} timeout={600 + idx * 300}>
              <Card
                sx={{
                  height: CARD_HEIGHT,
                  borderRadius: 3,
                  boxShadow:
                    '0px 4px 12px rgba(0,0,0,0.3), 6px 0px 12px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.05)',
                    zIndex: 1,
                    boxShadow:
                      '0px 12px 24px rgba(0,0,0,0.4), 12px 0px 24px rgba(0,0,0,0.4)'
                  },
                  '&:hover .overlay': {
                    opacity: 1,
                    transform: 'scale(1)'
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: IMAGE_HEIGHT,
                    bgcolor: '#f5f5f5',
                    overflow: 'hidden'
                  }}
                >
                  <CardMedia
                    component="img"
                    image={m.img}
                    alt={m.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />

                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transform: 'scale(0.8)',
                      transition: 'opacity 0.3s ease, transform 0.3s ease'
                    }}
                  >
                    <IconButton sx={iconStyle} aria-label="Facebook" href="#">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton sx={iconStyle} aria-label="LinkedIn" href="#">
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      sx={iconStyle}
                      aria-label="Email"
                      href="mailto:someone@example.com"
                    >
                      <EmailIcon />
                    </IconButton>
                  </Box>
                </Box>

                <CardContent
                  sx={{
                    p: 2,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {m.name}
                  </Typography>
                  <Typography sx={{ mb: 1 }}>{m.role}</Typography>
                  <Typography variant="body2">{m.desc}</Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
