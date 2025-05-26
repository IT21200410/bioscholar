import React from 'react';
import { Box, Typography } from '@mui/material';
import achievementsImage from '../Achive.png'; // adjust the path as needed

export default function Achievements() {
  return (
    <Box
      id="achievements"
      sx={{
        flexGrow: 1,
        p: 2,
        px: { xs: 2, sm: 4, md: 20 },
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textAlign: 'left'
        }}
      >
        Achievements
      </Typography>

      <Box
        component="img"
        src={achievementsImage}
        alt="Achievements"
        sx={{
          display: 'block',       // ensure block-level so margins work
          mx: 'auto',             // horizontally center the image
          width: '100%',
          maxWidth: 950,
          borderRadius: 4,        // rounded corners
          boxShadow: 3,           // shadow effect
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',  // popup/scale effect
            boxShadow: 6              // stronger shadow on hover
          }
        }}
      />
    </Box>
  );
}
