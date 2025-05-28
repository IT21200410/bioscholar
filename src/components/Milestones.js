import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const cardVariants = {
  hidden: (isLeft) => ({
    opacity: 0,
    x: isLeft ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const milestones = [
  { 
    title: 'Project Proposal (Presentation • Proposal Report)',
    date: 'August 2024',
    mark: '12%',
    case: 'Group/Individual',
  },
  { 
    title: 'Progress Presentation - 1',
    date: 'December 2024',
    mark: '15%',
    case: 'Group/Individual'
  },
  { 
    title: 'Research Paper Publication',
    date: 'June 2025',
    mark: '19%',
    case: 'Group',
  },
  { 
    title: 'Final Reports (Thesis)',
    date: 'April 2025',
    mark: '19%',
    case: 'Group/Individual',
  },
  { 
    title: 'Progress Presentation - 2',
    date: 'March 2025',
    mark: '18%',
    case: 'Group/Individual',
  },
  { 
    title: 'Check List Documents',
    date: 'December 2024 and May 2025',
    mark: '2%',
    case: 'Group',
  },
  { 
    title: 'Log Books',
    date: 'June 2025',
    mark: '2%',
    case: 'Individual',
  },
  { 
    title: 'Final Presentation • Viva',
    date: 'May 2025',
    mark: '20%',
    case: 'Group/Individual',
  },
  { 
    title: 'Website Development',
    date: 'June 2025',
    mark: '2%',
    case: 'Group',
  },
];

const gradients = [
  'linear-gradient(135deg, rgb(19, 136, 28) 0%, rgb(4, 207, 48) 100%)',
  'linear-gradient(135deg, rgb(4, 207, 48) 0%, rgb(19, 136, 28) 100%)',
];

export default function ProjectMilestones() {
  return (
    <Box
      id="milestones"
      sx={{
        position: 'relative',
        py: 6,
        px: { xs: 2, sm: 4, md: 8, lg: 12 },
        maxWidth: 1200,
        mx: 'auto',
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          mb: 6,
          textAlign: 'center',
        }}
      >
        Project Milestones
      </Typography>

      {/* Central spine */}
      <Box
        sx={(theme) => ({
          position: 'absolute',
          top: `calc(${theme.spacing(8)} + ${theme.typography.h4.fontSize})`,
          bottom: 0,
          left: '50%',
          width: '4px',
          bgcolor: 'grey.300',
          transform: 'translateX(-50%)',
          zIndex: 0,
        })}
      />

      {milestones.map((item, index) => {
        const isLeft = index % 2 === 0;
        const gradient = gradients[index % gradients.length];

        return (
          <Box
            key={item.title}
            sx={{
              position: 'relative',
              mb: 8,
              display: 'flex',
              justifyContent: isLeft ? 'flex-start' : 'flex-end',
            }}
          >
            {/* Timeline dot */}
            <Box
              sx={{
                position: 'absolute',
                top: '24px',
                left: '50%',
                width: '16px',
                height: '16px',
                bgcolor: 'grey.300',
                borderRadius: '50%',
                transform: 'translate(-50%, 0)',
                zIndex: 1,
              }}
            />

            {/* Animated Milestone card */}
            <MotionBox
              custom={isLeft}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              sx={{
                width: { xs: '90%', sm: '45%' },
                background: gradient,
                color: 'common.white',
                p: 3,
                borderRadius: 2,
                boxShadow: 3,
                position: 'relative',
                zIndex: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.85 }}>
                {item.date}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Mark Allocation – {item.mark}
                </Typography>
                <Box
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                  }}
                >
                  {item.case}
                </Box>
              </Box>
            </MotionBox>
          </Box>
        );
      })}
    </Box>
  );
}
