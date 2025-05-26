import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box, Paper, Fade } from '@mui/material';
import pythonSymbol from '../technologies/Python.png';
import tech2 from '../technologies/Neo4j.png';
import tech3 from '../technologies/Mistral.png';
import tech4 from '../technologies/huggingface.png';
import tech5 from '../technologies/vs2.png';
import tech6 from '../technologies/flask.png';
import tech7 from '../technologies/groq.png';
import biologyImage from '../vector1.png';

const technologies = [
  { src: pythonSymbol, alt: "Python" },
  { src: tech2,      alt: "Neo4j" },
  { src: tech3,      alt: "Mistral AI" },
  { src: tech4,      alt: "HuggingFace" },
  { src: tech5,      alt: "VS Code" },
  { src: tech6,      alt: "Flask" },
  { src: tech7,      alt: "GROQ" }
];

const extendedTechnologies = [
  ...technologies, 
  ...technologies, 
  ...technologies
];

export default function About() {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  // Refs and visibility state for scroll-triggered animations
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const imageRef = useRef(null);
  const [para1Visible, setPara1Visible] = useState(false);
  const [para2Visible, setPara2Visible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const iv = setInterval(() => {
      setOffset(o => (o + 1) % technologies.length);
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const totalWidth = ref.current.scrollWidth / 3;
    const shift = (totalWidth / technologies.length) * offset;
    ref.current.style.transition = 'transform 0.5s ease-in-out';
    ref.current.style.transform = `translateX(-${shift}px)`;
  }, [offset]);

  // IntersectionObserver for paragraphs and image
  useEffect(() => {
    const elements = [
      { ref: para1Ref, setter: setPara1Visible },
      { ref: para2Ref, setter: setPara2Visible },
      { ref: imageRef, setter: setImageVisible }
    ];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const match = elements.find(e => e.ref.current === entry.target);
          if (match) {
            match.setter(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      elements.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2, px: { xs: 2, sm: 4, md: 20 }, overflow: 'hidden' }}>
      <Paper elevation={0} sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          About Biology Assistive System
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          gap: 4,
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch'
        }}>
          <Box sx={{ 
            flex: 1,
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Fade in={para1Visible} timeout={1200}>
              <Typography ref={para1Ref} variant="body1" paragraph align="justify">
                The Advanced Level (AL) Biology Assistive System in Sri Lanka is a sophisticated educational platform designed to cater to the specific needs of Sri Lankan students preparing for their AL biology examinations. This system integrates a wealth of resources including detailed lesson plans, interactive simulations, and comprehensive assessments aligned with the Sri Lankan biology curriculum. It offers personalized learning paths that adapt to the individual pace and style of each student, ensuring a tailored educational experience.
              </Typography>
            </Fade>

            <Fade in={para2Visible} timeout={1200}>
              <Typography ref={para2Ref} variant="body1" paragraph align="justify">
                The Interactive and Adaptive AL Biology Learning Environment is an innovative tool specifically developed for Sri Lankan students facing the Advanced Level biology examinations. This environment utilizes cutting-edge AI technology to deliver an interactive learning experience, with dynamic content presentations and virtual reality (VR) simulators that mimic cells like biological processes and laboratory settings. This system is designed to be intuitive and user-friendly, allowing students to easily navigate through complex biological theories and experiments.
              </Typography>
            </Fade>
          </Box>

          {/* Vertical separator line */}
          <Box sx={{ width: '1px', backgroundColor:'lightgreen', mx: 2 }} />

          <Fade in={imageVisible} timeout={1200}>
            <Box
              ref={imageRef}
              component="img"
              src={biologyImage}
              alt="Biology Concept"
              sx={{
                width: { 
                  xs: '100%', 
                  md: '45%', 
                  lg: '37%' 
                },
                height: {
                  xs: '300px',
                  md: 'auto'
                },
                maxHeight: { md: '550px' },
                objectFit: 'contain',
                flexShrink: 0,
                alignSelf: 'center',
                borderRadius: 2,
                boxShadow: 0
              }}
            />
          </Fade>
        </Box>
      </Paper>

      <Box sx={{ mt: 4, overflow: 'hidden' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          Technologies Used
        </Typography>
        <Box ref={ref} sx={{ display: 'flex', minWidth: '300%' }}>
          {extendedTechnologies.map((tech, i) => (
            <Box
              component="img"
              key={i}
              src={tech.src}
              alt={tech.alt}
              sx={{
                width: '2.2%',
                height: '1%',
                ml: '1%',
                flexShrink: 0
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
