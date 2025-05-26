import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

export default function Features() {
  const items = [
    { title: 'Named Entity Recognition (NER)', desc: 'Custom NER models accurately identify...' },
    { title: 'Knowledge Graph (Legal Knowledgebase)', desc: 'AYCA utilizes a knowledge graph to...' },
    { title: 'Legal Case Summarization', desc: 'AYCAs legal case summarization feature...' },
    { title: 'Legal Question-Answering (Q&A)', desc: 'AYCAs question-answering component...' }
  ];
  return (
    <Box id="features" sx={{ py: 8, px: 2, backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={4}>
        {items.map(item => (
          <Grid item xs={12} md={6} key={item.title}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>{item.title}</Typography>
              <Typography>{item.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
