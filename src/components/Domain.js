import React, { useState } from 'react';
import { Box, Typography, Collapse, Grow } from '@mui/material';

const domainItems = [
  'LITERATURE SURVEY',
  'RESEARCH PROBLEM',
  'RESEARCH GAP',
  'RESEARCH OBJECTIVE',
  'METHODOLOGY'
];

const sampleContent = {
  'LITERATURE SURVEY': [
    'Large Language Models (LLMs) have emerged as a cornerstone of modern technological advancement, revolutionizing a wide array of sectors. Their adaptability has enabled applications ranging from natural language understanding and automated content creation to intelligent customer interactions and sophisticated data analysis. Industry leaders such as Microsoft, DeepMind (a subsidiary of Google), and Anthropic are at the forefront of LLM research, dedicating substantial resources to improving their models’ capabilities. Their primary goals include refining model accuracy, enhancing performance, and ensuring alignment with ethical standards to remain at the cutting edge in an increasingly competitive field.',
    'These models are typically trained on massive datasets sourced from the internet, resulting in architectures that contain billions of parameters. While this scale allows for impressive language generation and understanding, it also introduces key limitations. Two prominent issues are the generation of hallucinations instances where the model produces fluent but factually incorrect or illogical content—and insufficient depth in domain-specific knowledge , often compounded by outdated information.',
    'To address these challenges, techniques such as Retrieval-Augmented Generation (RAG) pipelines and knowledge graphs have been introduced. Knowledge graphs function as structured networks of real-world entities and their relationships, built from up-to-date and domain-specific textual data. Notable examples of knowledge graphs utilized by LLMs today include WordNet, DBpedia, and the Microsoft Concept Graph. These graphs provide a reliable foundation of information that LLMs can leverage, offering key advantages such as enhanced contextual understanding, reduced hallucinations through verified facts, and dynamic updatability without retraining. By explicitly modeling relationships, knowledge graphs also improve reasoning accuracy, support cross-domain knowledge integration, and enable traceable, explainable outputs—making them indispensable for applications demanding precision, scalability, and real-time adaptability.',
    'In a RAG pipeline, the model first retrieves relevant information from these external knowledge sources, which is then integrated into the original prompt. This enriched prompt is fed into the LLM, enabling it to produce more precise and contextually appropriate responses. The integration of RAG with knowledge graphs not only amplifies LLM’s ability to deliver precise, well-informed outputs but also significantly reduces the risk of errors and hallucinations. Moreover, this approach ensures that the LLM remains up to date with the latest domain-specific knowledge, thereby improving its overall effectiveness and reliability in specialized applications.',
    'Researchers are now focusing their efforts on how multimodal knowledge graphs can be integrated into this framework to further enhance LLMs. Unlike traditional knowledge graphs that primarily deal with textual data, multimodal knowledge graphs incorporate diverse data types, such as images, videos, and structured data, alongside text. By linking multiple data modalities, these graphs create a richer and more comprehensive representation of information.',
  ],
  'RESEARCH PROBLEM': [
    'Traditional knowledge graphs have primarily relied on textual and symbolic representations of knowledge, creating limitations in handling visual information. While image-based data represents a crucial component of knowledge in specialized domains, current systems lack robust frameworks for integrating visual content with structured knowledge representations. This gap becomes particularly evident in fields where visual data plays a fundamental role in understanding complex concepts',
    'This component addresses these limitations by developing an image-enhanced and multimodal knowledge graph framework. The focus remains on integrating static visual representations (including diagrams, photographs, and illustrations), extracted keyframes from educational videos, transcripts from audio lectures, and handwritten notes with structured knowledge. The biology domain serves as the primary test case due to its inherent dependence on such visual and context-rich representations—ranging from microscopic imagery and anatomical diagrams to narrated experiment walkthroughs and student-annotated notes—making it an optimal environment for validating this multimodal integration approach.',
    'The framework establishes best practices for associating diverse content types with knowledge graph entities while maintaining computational efficiency and query flexibility. In its biological implementation, this component demonstrates enhanced educational applications through visual query capabilities and image-supported explanations. The architecture retains domain adaptability, with potential extensions to other visually and multimodally intensive fields.',
    'Building on this foundation, the development of an interactive application serves as a crucial step in evaluating the usability and effectiveness of the MMKG framework. The Sri Lankan syllabus is notably more challenging compared to other educational systems worldwide, placing a significant academic burden on students. As a result, many students rely heavily on private tuition classes to cope with their studies. However, a major drawback of this approach is that students often resort to rote memorization rather than developing a deep conceptual understanding. Research suggests that visual explanations significantly enhance comprehension, reducing dependence on memorization-based learning.',
    'To address these challenges, the proposed MMKG system integrates textual, visual, and derived multimodal knowledge representations—fostering a more interactive and engaging learning experience. The application built upon this framework enables students to query biological concepts using not only text and images but also information extracted from videos (e.g., keyframes) and audio (e.g., transcripts), as well as handwritten notes. This allows them to explore and understand subject matter more intuitively. By leveraging multimodal learning, the system facilitates deeper engagement, encouraging conceptual mastery over rote learning. Furthermore, this approach has the potential to lessen students’ reliance on private tuition, offering a more accessible and effective means of education.',

  ],

  'RESEARCH GAP': [
    'While traditional knowledge graphs (KGs) have been adequate to represent structured data, they fall short when faced with the unstructured, multimodal data that characterizes real-world cases—particularly within education, science, and medicine. This is even more apparent as applications begin to integrate handwritten notes, hand-drawn sketches, voice, and video content. Existing systems rely significantly on symbolic representations and structured text, incapable of accessing the semantic richness offered by images, handwriting, and audio. Hence, traditional KGs are less intuitive and human-oriented in terms of interpretability than multimodal knowledge graphs (MMKGs) can be.',
    'Multimodal knowledge graphs expand on the traditional model by incorporating diverse data types such as images, text, audio, and video into a unified structure. Recent developments demonstrate the feasibility and advantages of MMKGs for general-purpose applications, yet many are domain-agnostic and not optimized for specialized fields like education. For instance, while some systems demonstrate the integration of structured data, web text, and images, they rarely incorporate domain-specific modalities like annotated diagrams, simulations, or spoken content, which are essential for comprehensive understanding in subjects like biology.',
    'Recent works also explore the synergy between knowledge graphs and large language models (LLMs), albeit for question answering and hallucination mitigation applications. These efforts are, however, general-purpose and textual data-centric. There remains a tangible absence of domain-specific MMKGs that embed curriculum-based knowledge from diverse modalities—let alone those for interactive learning environments. Furthermore, there is an absence of large-scale verification mechanisms within current systems for guaranteeing educational objective alignment and real-time learning necessities.',
    'Efforts in handwritten text recognition and image analysis have led to scalable solutions with neural network-based models, capable of accurately detecting and processing handwritten content. These technologies play a crucial role in converting unstructured handwritten notes—common in biology education—into machine-readable form. Similarly, advanced deep learning frameworks for image recognition have shown exceptional accuracy in classifying and interpreting visual content, yet these approaches are rarely embedded into knowledge graphs for educational use.',
    'Finally, while recent studies evaluate how LLMs perform semantic parsing to convert natural language queries into structured formats (e.g., SPARQL, SQL), significant limitations persist. Models often struggle with schema generalization, multi-turn interactions, and complex queries. Moreover, hallucinations, syntactic errors, and lack of domain alignment remain major challenges. This signals a pressing need for more robust, schema-aware, and interpretable semantic parsing approaches, especially in the context of multimodal educational systems.',
  ],

  'RESEARCH OBJECTIVE': [
    'The main focus of this study is to design and validate a scalable framework for building domain-specific Multimodal Knowledge Graphs (MMKGs), with evaluation conducted through the development of an Intelligent Biology Assistive System tailored for Sri Lankan Advanced Level (A/L) biology students. The framework is designed to support multiple forms of educational content by transforming both structured and unstructured data into a machine-readable knowledge base that can be queried, visualized, and used for intelligent reasoning.',
    'The system is composed of four core components. First, the Multi-Modal Knowledge Graph construction module integrates structured textual knowledge with visual resources such as biological diagrams, annotated textbook images, and interactive models. This creates a richly connected representation of domain entities, enabling both textual and visual access to key concepts.',
    'Second, the system includes a Video and Audio Processing component, which extracts educational knowledge from multimedia sources such as lecture recordings and video tutorials. Using speech-to-text and segmentation techniques, relevant biological information is identified, converted into text, and mapped into the knowledge graph as structured facts and relationships.',
    'Third, a Handwritten Note Recognition component allows students and teachers to contribute handwritten content—including notes and hand-drawn diagrams. Through handwriting recognition and diagram interpretation, this component digitizes and integrates user-generated educational material into the graph, enriching the system with authentic, curriculum-relevant knowledge.',
    'Finally, the Semantic Parsing module enables natural language interaction with the system. It translates student questions into Cypher queries using a fine-tuned language model, retrieves the relevant nodes and relationships from the Neo4j-based MMKG, and constructs a structured context. This context is then used to generate a student-friendly response through a large language model, ensuring that the answers are not only accurate but also explainable and aligned with the syllabus.',
    'The final outcome of this framework is a fully functional Biology Assistive Chatbot designed to support Sri Lankan A/L students in their self-study and exam preparation. The chatbot provides syllabus-aligned, curriculum-specific answers by querying the multi-modal knowledge graph as its core knowledge source. This approach ensures that students receive clear, structured, and visually contextualized answers to their queries—bridging gaps in traditional education methods and empowering independent learning. Furthermore, the framework established through this study serves as a transferable blueprint for implementing MMKGs in other specialized fields such as healthcare, engineering, and education',
  ],

  'METHODOLOGY': [
    'The methodology employed in the development of the Biology Intelligent Assistive System centers on building a domain-specific Multimodal Knowledge Graph (MMKG) that serves as the core of the platform. It covers the full project lifecycle, including data collection, requirement analysis, system architecture, and component development. A key aspect involves extracting and integrating structured knowledge from varied sources such as textbooks in PDF format, handwritten notes, biological images, video tutorials, and audio lectures. This multimodal integration enables the system to semantically process and retrieve information across diverse media types, enhancing context-aware learning for A/L Biology students. The approach demonstrates how combining natural language understanding with visual and auditory content can support the creation of scalable, intelligent educational systems tailored to specific domains.'
  ]
};

export default function Domain() {
  // start with nothing selected
  const [selected, setSelected] = useState(null);

  return (
    <Box
      id="domain"
      sx={{
        flexGrow: 1,
        p: 2,
        px: { xs: 2, sm: 4, md: 20 },
        overflow: 'hidden'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Domain
      </Typography>

      {/* Centered Navbar */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3, flexWrap: 'nowrap' }}>
        {domainItems.map(item => (
          <Box
            key={item}
            onClick={() => setSelected(prev => prev === item ? null : item)} // toggle off if clicked again
            sx={{
              cursor: 'pointer',
              px: 2,
              py: 1,
              mx: 0.5,
              bgcolor: selected === item ? 'lightgreen' : 'transparent',
              color: selected === item ? 'black' : 'inherit',
              borderRadius: 1,
              transition: 'background-color 0.3s',
              whiteSpace: 'nowrap'
            }}
          >
            <Typography variant="button" sx={{ fontWeight: 'bold' }}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Animated Content Panels */}
      {domainItems.map(item => (
        <Collapse
          key={item}
          in={selected === item || selected === null} // show if this item is selected OR if none is
          timeout={400}
          unmountOnExit
        >
          <Box sx={{ bgcolor: '#ebebeb', p: 3, borderRadius: 5, mb: 2 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              {item}
            </Typography>
            {sampleContent[item].map((para, index) => (
              <Grow
                key={index}
                in={selected === item || selected === null} // likewise for each paragraph
                style={{ transformOrigin: '0 0' }}
                timeout={500 + index * 200}
              >
                <Typography paragraph align="justify">
                  {para}
                </Typography>
              </Grow>
            ))}
          </Box>
        </Collapse>
      ))}
    </Box>
  );
}
