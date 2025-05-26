import React from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import chatbotImage from '../chatbot.png';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';

// Create motion-enhanced Box component
const MotionBox = motion(Box);

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const featureVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
  }),
};

export default function LandingPage() {
  const features = [
    {
      title: 'Multimodal Data Integration',
      description:
        'The system integrates data from various modalities—PDF textbooks, handwritten notes, biological images, video tutorials, and audio lectures—ensuring a rich and diverse source of knowledge. This comprehensive integration allows for deeper contextual understanding and supports effective multimodal learning experiences for A/L Biology students.',
      icon: CloudUploadIcon,
    },
    {
      title: 'Multimodal Knowledge Graph (Biology Knowledgebase)',
      description:
        'A domain-specific multimodal knowledge graph serves as the backbone of the system, capturing interconnected relationships between biological concepts across textual, visual, and auditory formats. This structured representation enables intelligent linking and contextual reasoning in the biology domain.',
      icon: AccountTreeIcon,
    },
    {
      title: 'Efficient Knowledge Retrieval Using Small Language Models (SLMs)',
      description:
        'A lightweight semantic parsing approach powered by small language models enables precise and efficient retrieval from the multimodal knowledge graph. This ensures that student queries are accurately mapped to relevant biological information across modalities, enhancing response quality and speed.',
      icon: SearchIcon,
    },
    {
      title: 'Interactive Biology Assistant Application',
      description:
        'An intuitive web-based interface allows users to interact seamlessly with the multimodal knowledge graph. The platform offers an engaging and responsive environment for querying biological content, promoting self-guided learning through natural language and multimodal interaction.',
      icon: ChatIcon,
    },
  ];

  return (
    <Box
      id="landing"
      sx={{
        flexGrow: 1,
        p: 2,
        px: { xs: 2, sm: 4, md: 20 },
        overflow: 'hidden',
      }}
    >
      {/* Animated Image Section */}
      <Grid container justifyContent="center" sx={{ py: 4 }}>
        <MotionBox
          component="img"
          src={chatbotImage}
          alt="Illustration"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          sx={{
            width: '70%',
            borderRadius: 2,
            transition: 'box-shadow 0.3s ease-in-out',
            ':hover': { boxShadow: 6 },
          }}
        />
      </Grid>

      {/* Animated Features Section */}
      <Grid container spacing={4} sx={{ py: 4 }}>
        {features.map(({ title, description, icon }, index) => {
          const IconComp = icon;
          return (
            <Grid key={title} item xs={12} md={6}>
              <MotionBox
                custom={index}
                variants={featureVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: 'success.main',
                    borderRadius: 1,
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconComp sx={{ color: '#fff', fontSize: 32 }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {description}
                </Typography>
              </MotionBox>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
