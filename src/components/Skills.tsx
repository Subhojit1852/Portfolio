// components/Skills.tsx
import { useState } from 'react';
import { Grid, Typography, Chip, Box } from '@mui/material';
import SkillDialog from './SkillDialog';

const skillContextMap: Record<string, string> = {
  "FastAPI": "Used to build and deploy secure APIs in both the medical chatbot and Quality Writing Tool, enabling scalable, low-latency data pipelines.",
  "React": "Implemented for the entire frontend with dynamic routing, form handling, debounced search, and state management using hooks.",
  "LangChain": "Used in CryptoBot for chaining prompts, handling context-aware questions, and structuring GenAI outputs with custom prompt templates.",
  "Azure Service Bus": "Implemented Pub/Sub sync in Quality Writing Tool to update sections asynchronously and improve real-time UX.",
  "CosmosDB": "Integrated with FastAPI to store and query structured patient data and deviation histories.",
  "MSAL": "Secured authentication for chat sessions and backend access in the healthcare GenAI chatbot.",
  "Streamlit": "Used to create an interactive UI in CryptoBot with animated elements and live data from CoinGecko API.",
  "OpenAPI": "Used to define, consume, and document backend endpoints in FastAPI projects for consistent frontend integration.",
  "FAISS": "Utilized in CryptoBot for semantic vector search and RAG-based retrieval from price and article history.",
  "TypeScript": "Used throughout React projects for strong type safety, clean component interfaces, and API contracts.",
  "Material UI": "Used across the portfolio site and internal projects to build theme-consistent UI components with responsive design.",
  "Tailwind CSS": "Applied in earlier UI implementations for utility-first styling and fast prototyping.",
  "JWT": "Used to secure API authentication workflows and ensure session integrity across backend services.",
  "Postman": "Used to test and document RESTful APIs built in FastAPI and Node.js during local and CI/CD testing.",
  "Redux": "Used alongside React to manage app-wide states for the writing tool and chatbot interfaces.",
  "Docker": "Containerized FastAPI backend services to streamline local development and Azure deployment.",
  "GitHub Actions": "Configured CI/CD pipelines for automated testing and deployment of production-ready web apps.",
  "Azure WebApps": "Primary platform for hosting FastAPI-based GenAI applications with integrated diagnostics and logging.",
  "CoinGecko API": "Fetched live Bitcoin pricing and history data in CryptoBot to build financial context in LLM prompts.",
  "Speech SDK": "Used in Azure-based GenAI chatbot to support real-time speech-to-text and text-to-speech interactions.",
  "LLMs (Zephyr-7B, Mistral)": "Integrated through HuggingFace Inference API for context-aware, generative reasoning in chatbots and assistants.",
  "Debouncing": "Applied in search components to optimize API load and improve UX in React-based forms.",
  "Prompt Engineering": "Crafted domain-specific prompts to guide GenAI models for healthcare, crypto, and document editing tasks.",
  "Markdown Rendering": "Custom styles applied in React and Streamlit to consistently format LLM outputs with visual clarity.",
  "Retrieval-Augmented Generation (RAG)": "Used with FAISS and LangChain to enhance LLM responses using contextual search over historical data.",
  "Bitbucket": "Version control system used in client project collaborations alongside GitHub for enterprise-level workflows."
};


const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClick = (skill: string) => {
    setSelectedSkill(skill);
    setDialogOpen(true);
  };

  return (
    <Box sx={{  }}>
      <Typography variant="h4" gutterBottom color="#00ffc3" fontWeight="bold">
        Skills
      </Typography>
      <Grid container spacing={2}>
        {Object.keys(skillContextMap).map((skill) => (
          <Grid item key={skill}>
            <Chip
              label={skill}
              clickable
              onClick={() => handleClick(skill)}
              sx={{
                backgroundColor: '#1c1f26',
                border: '1px solid #00ffc3',
                color: '#00ffc3',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#232834',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>

      {selectedSkill && (
        <SkillDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          skillName={selectedSkill}
          skillContext={skillContextMap[selectedSkill]}
        />
      )}
    </Box>
  );
};

export default Skills;
