import React from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{ flexGrow: 1, p: 2, px: { xs: 2, sm: 4, md: 20 }, overflow: 'hidden' }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
      >
        Contact Us
      </Typography>

      {/* Google Map Embed */}
      <Box sx={{ mb: 4, width: '100%', height: { xs: 250, md: 350 }, overflow: 'hidden' }}>
        <iframe
          title="SLIIT Malabe Location"
          src="https://maps.google.com/maps?q=Sri%20Lanka%20Institute%20of%20Information%20Technology%20Malabe&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </Box>

      <Grid container spacing={4}>
        {/* Contact Info Column */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LocationOnIcon color="success" sx={{ mr: 1 }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Location:
              </Typography>
              <Typography variant="body2">Malabe, Sri Lanka</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <EmailIcon color="success" sx={{ mr: 1 }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Email:
              </Typography>
              <Typography variant="body2">bioscholar24@gmail.com</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PhoneIcon color="success" sx={{ mr: 1 }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Call:
              </Typography>
              <Typography variant="body2">+94 71 730 9707</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Contact Form Column */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Your Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Your Email" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Subject" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={6}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'green',
                  color: '#fff',
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  '&:hover': { backgroundColor: 'lightgreen' }
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
