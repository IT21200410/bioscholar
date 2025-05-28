import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import Grow from '@mui/material/Grow';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Project_charter from '../project_charter.png';
import Project_proposal from '../project_proposal.png';
import Reserach_paper from '../reserach_paper.png';
import Thesis from '../thesis.png';
import Status from '../status.png';
import Logbook from '../logbook.png';
import Bussines from '../bussines-report.png';

const docs = [
  { title: 'TAF', desc: 'The document gives the information regarding the statement of scope, objectives overview, an outline of scope, an approximate schedule and people who are participating in a project', img: Project_charter, link: 'https://drive.google.com/drive/folders/1i8dVNiVnR9Ro5QlEHTHoafvV5_yzbLXo?usp=sharing' },
  { title: 'Project Proposal', desc: 'The document contains details like goals, objectives, important dates, milestones and requirements needed to start and complete the project.', img: Project_proposal, link: 'https://drive.google.com/drive/folders/1YDaH5WA9-ZBaFmCP2SXCtVvrC0LyGN0K?usp=sharing' },
  { title: 'Research Paper', desc: 'A research paper contains writing that provides Literature review, Research methodology, analysis, interpretation, and argument based on in-depth independent research', img: Reserach_paper, link: 'https://ieeexplore.ieee.org' },
  { title: 'Final Thesis', desc: 'The document contains the Proposed solution to the research question, which was finalized after completing the research', img: Thesis, link: 'https://drive.google.com/drive/folders/1Vfphcndr__lFji8uALzR5V01YcUFs5rl?usp=sharing' },
  { title: 'Status Document', desc: 'The document describes the progress of the project within the specific time period and compares it against the project plan checklist', img: Status, link: 'https://drive.google.com/drive/folders/1SYXmautiarklPjdsokupsvE1IIqt_WaR?usp=sharing' },
  { title: 'Research logbook', desc: 'The document describes the progress of the project within the specific time period and compares it against the project plan checklist', img: Logbook, link: 'https://drive.google.com/drive/folders/1_ybhrvhG0LM27WBkpkmamLw6oPVvnywT?usp=sharing' },
  { title: 'Business Plan', desc: 'Business plan is very valuable when it comes to commercializing the product to the real world market as an organization entity', img: Bussines, link: 'https://drive.google.com/drive/folders/1ZkMn3PsLLPLvTCIBp028s0TGbwalfNMZ?usp=sharing' }
];

export default function Documents() {
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
    <Box id="documents" ref={containerRef} sx={{ flexGrow: 1, p: 2, px: { xs: 2, sm: 4, md: 20 }, overflow: 'hidden' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Documents
      </Typography>

      <Grid container spacing={4} alignItems="stretch">
        {docs.map((d, index) => (
          <Grid item xs={12} sm={6} md={4} key={d.title} sx={{ mb: 4 }}>
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
                  image={d.img}
                  alt={d.title}
                  sx={{ width: '60%', maxWidth: 100, height: 140, objectFit: 'contain', mb: 2, borderRadius: 1 }}
                />
                <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{d.title}</Typography>
                  <Typography paragraph>{d.desc}</Typography>
                </CardContent>
                <Button
                  size="small"
                  href={d.link}
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