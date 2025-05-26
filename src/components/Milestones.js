import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const milestones = [
  { 
    title: 'Project Proposal (Presentation • Proposal Report)',
    month: 'March 2023',
    mark: '12%',
    case: 'Case (answers)'
  },
  { 
    title: 'Research Paper Publication',
    month: 'June 2023',
    mark: '19%',
    case: 'Case'
  },
  { 
    title: 'Progress Presentation - 1',
    month: 'May 2023',
    mark: '15%',
    case: 'Case (answers)'
  },
  { 
    title: 'Final Reports (Thesis)',
    month: 'September 2023',
    mark: '19%',
    case: 'Case (answers)'
  },
  { 
    title: 'Progress Presentation - 2',
    month: 'September 2023',
    mark: '18%',
    case: 'Case (answers)'
  },
  { 
    title: 'Log Books',
    month: 'October 2023',
    mark: '2%',
    case: 'Case(ours)'
  },
  { 
    title: 'Status Documents 1 & 2',
    month: 'May and September 2023',
    mark: '2%',
    case: 'Case(ours)'
  },
  { 
    title: 'Final Presentation • Viva',
    month: 'October 2023',
    mark: '20%',
    case: 'Case (answers)'
  },
  { 
    title: 'Website Development',
    month: 'November 2023',
    mark: '2%',
    case: 'Case'
  },
];

export default function ProjectMilestones() {
  return (
    <Box sx={{ p: 4, px: { xs: 2, sm: 4, md: 8, lg: 20 }, overflow: 'hidden' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ 
        fontWeight: 'bold', 
        textTransform: 'uppercase',
        mb: 4
      }}>
        Project Milestones
      </Typography>
      
      <List sx={{ width: '100%' }}>
        {milestones.map((item, index) => (
          <React.Fragment key={item.title}>
            <ListItem alignItems="flex-start" sx={{ py: 2 }}>
              <ListItemText
                primary={
                  <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1
                  }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2">
                      {item.month}
                    </Typography>
                  </Box>
                }
                secondary={
                  <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <Typography variant="body2" color="text.secondary">
                      Mark Allocation - {item.mark}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.case}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            {index < milestones.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}