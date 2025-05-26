import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChatIcon from '@mui/icons-material/Chat';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        backgroundColor: '#0B1F3B',
        color: '#fff',
        py: 6,
        px: { xs: 2, sm: 4, md: 8 }
      }}
    >
      <Grid container spacing={4}>
        {/* Project Info & Social */}
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" gutterBottom>
            Final Year Research Project
          </Typography>
          <Typography variant="body2">
            Biology Assitive System
          </Typography>
          <Typography variant="body2">Team NeuralBeam (2025)</Typography>
          <Typography variant="body2" gutterBottom>
            Sri Lanka Institute of Information Technology
          </Typography>
          <Typography variant="body2">
            <strong>Phone:</strong> +94 71 730 9707
          </Typography>
          <Typography variant="body2">
            <strong>Email:</strong> bioscholar24@gmail.com
          </Typography>
          <Box sx={{ mt: 2 }}>
            {[
              { icon: <TwitterIcon />, label: 'Twitter' },
              { icon: <FacebookIcon />, label: 'Facebook' },
              { icon: <InstagramIcon />, label: 'Instagram' },
              { icon: <ChatIcon />, label: 'Chat' },
              { icon: <LinkedInIcon />, label: 'LinkedIn' }
            ].map((social, i) => (
              <IconButton
                key={i}
                aria-label={social.label}
                sx={{
                  color: '#fff',
                  backgroundColor: '#1F2A3A',
                  mr: i < 4 ? 1 : 0,
                  '&:hover': { backgroundColor: '#323E4D' }
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Useful Links
          </Typography>
          {[
            'Home',
            'About us',
            'Documents',
            'Presentations',
            'Milestones',
            'Domain',
            'Team'
          ].map((link) => (
            <Box key={link} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <ChevronRightIcon fontSize="small" sx={{ color: 'lightgreen', mr: 0.5 }} />
              <Link
                href={`#${link.replace(/\s+/g, '').toLowerCase()}`}
                sx={{
                  color: 'lightgreen',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                {link}
              </Link>
            </Box>
          ))}
        </Grid>

        {/* Our Services */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Our Services
          </Typography>
          {[
            'Biological Entity Extraction using Custom NER',
            'Biology Knowledge Graph Development & Document Retrieval',
            'Biological Document Summarization',
            'Domain-Specific Question & Answering',
            'Interactive Biology Assistive Web Application'
          ].map((service) => (
            <Box key={service} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <ChevronRightIcon fontSize="small" sx={{ color: 'lightgreen', mr: 0.5 }} />
              <Typography variant="body2">{service}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>

      {/* Scroll to Top */}
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: 'absolute',
          right: { xs: 16, md: 32 },
          bottom: 16,
          backgroundColor: '#66DBF9',
          color: '#fff',
          '&:hover': { backgroundColor: '#57c3de' }
        }}
        aria-label="Scroll to top"
      >
        <ArrowUpwardIcon />
      </IconButton>
    </Box>
  );
}
