import React from 'react';
import { Box, Typography } from '@mui/material';

const milestones = [
  { 
    title: 'Project Proposal (Presentation • Proposal Report)',
    date: 'March 2023',
    mark: '12%',
    case: 'Case (answers)',
  },
  { 
    title: 'Progress Presentation - 1',
    date: 'May 2023',
    mark: '15%',
    case: 'Case (answers)',
  },
  { 
    title: 'Research Paper Publication',
    date: 'June 2023',
    mark: '19%',
    case: 'Case',
  },
  { 
    title: 'Final Reports (Thesis)',
    date: 'September 2023',
    mark: '19%',
    case: 'Case (answers)',
  },
  { 
    title: 'Progress Presentation - 2',
    date: 'September 2023',
    mark: '18%',
    case: 'Case (answers)',
  },
  { 
    title: 'Status Documents 1 & 2',
    date: 'May and September 2023',
    mark: '2%',
    case: 'Case (ours)',
  },
  { 
    title: 'Log Books',
    date: 'October 2023',
    mark: '2%',
    case: 'Case (ours)',
  },
  { 
    title: 'Final Presentation • Viva',
    date: 'October 2023',
    mark: '20%',
    case: 'Case (answers)',
  },
  { 
    title: 'Website Development',
    date: 'November 2023',
    mark: '2%',
    case: 'Case',
  },
];

export default function ProjectMilestones() {
  // Two sample gradients for alternating cards
  const gradients = [
    'linear-gradient(135deg, rgb(19, 136, 28) 0%, rgb(4, 207, 48) 100%)',
    'linear-gradient(135deg, rgb(4, 207, 48) 0%, rgb(19, 136, 28) 100%)',
  ];

  return (
    <Box
    id="milestones" 
      sx={{
        position: 'relative',
        py: 6, // top and bottom padding
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
          textTransform: 'uppercase',
          mb: 6,
          textAlign: 'center',
        }}
      >
        Project Milestones
      </Typography>

      {/* Central spine, starting below the header */}
      <Box
        sx={(theme) => ({
          position: 'absolute',
          // offset by container's top padding (theme.spacing(6)) + header's fontSize
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

            {/* Milestone card */}
            <Box
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

                {/* Pill badge */}
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
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
