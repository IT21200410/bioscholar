import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const milestones = [
  'Project Proposal (Presentation + Proposal Report) – March 2023 (12%)',
  'Progress Presentation – 1 – May 2023 (15%)',
  'Research Paper Publication – June 2023 (10%)',
  'Final Reports (Thesis) – September 2023 (19%)',
  'Progress Presentation – 2 – September 2023 (18%)',
  'Status Documents 1 & 2 – May & September 2023 (2%)',
  'Log Books – October 2023 (2%)',
  'Final Presentation + Viva – October 2023 (20%)',
  'Website Development – November 2023 (2%)'
];

export default function Milestones() {
  return (
    <Box id="milestones" sx={{ flexGrow: 1, p: 2, px: { xs: 2, sm: 4, md: 20 }, overflow: 'hidden' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>Milestones</Typography>
      <List>
        {milestones.map(item => (
          <ListItem key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}