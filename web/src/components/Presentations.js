import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import Grow from '@mui/material/Grow';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Proposal_ppt from '../proposal_ppt.png';
import Ppt1 from '../ppt1.png';
import Ppt2 from '../ppt2.png';
import Finalppt from '../finalppt.png';

const pres = [
  { title: 'Proposal presentation', desc: 'Initial Presentation with Overview of Research Problem', img: Proposal_ppt, link: 'https://drive.google.com' },
  { title: 'Progress presentation-1', desc: '50% Project Completion', img: Ppt1, link: 'https://drive.google.com' },
  { title: 'Progress presentation-2', desc: '90% Project Completion', img: Ppt2, link: 'https://drive.google.com' },
  { title: 'Final presentation', desc: '100% Completion with deployed Solution', img: Finalppt, link: 'https://drive.google.com' }
];

export default function Presentations() {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="presentations"
      ref={containerRef}
      sx={{
        flexGrow: 1,
        p: 2,
        px: { xs: 2, sm: 4, md: 20 },
        overflow: 'hidden'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Presentations
      </Typography>

      <Grid container spacing={4} alignItems="stretch">
        {pres.map((p, index) => (
          <Grid item xs={12} sm={6} md={3} key={p.title} sx={{ mb: 4 }}>
            <Grow in={inView} timeout={600 + index * 400}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 2,
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.3), 6px 0px 12px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.05)',
                    zIndex: 1,
                    boxShadow: '0px 12px 24px rgba(0,0,0,0.4), 12px 0px 24px rgba(0,0,0,0.4)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={p.img}
                  alt={p.title}
                  sx={{
                    width: '60%',
                    maxWidth: 100,
                    height: 140,
                    objectFit: 'contain',
                    mb: 2,
                    borderRadius: 1
                  }}
                />
                <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {p.title}
                  </Typography>
                  <Typography paragraph>
                    {p.desc}
                  </Typography>
                </CardContent>
                <Button
                  size="small"
                  href={p.link}
                  startIcon={<CloudDownloadIcon />}
                  sx={{
                    border: '1px solid rgba(0,0,0,0.2)',
                    borderRadius: 1,
                    transition: 'background-color 0.3s ease, transform 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      transform: 'translateY(-2px) scale(1.02)'
                    }
                  }}
                >
                  Download
                </Button>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
