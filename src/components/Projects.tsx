import { Box, Typography, Card, CardContent, Button, Stack } from '@mui/material';

const projects = [
  {
    title: 'CryptoBot — Intelligent Crypto Assistant',
    link: 'https://cryptobot-ma7faqhh66xvogqk4uzyaf.streamlit.app/',
    desc: 'Built using Zephyr-7B LLM (HuggingFace), LangChain, CoinGecko API, and Streamlit. Includes animated UI, markdown rendering, and context-aware math reasoning.',
  },
  {
    title: 'Medical Chatbot (GenAI)',
    desc: 'Full-stack GenAI chatbot using FastAPI, React, MSAL, Azure Speech SDK for healthcare Q&A. Supports voice interactions, markdown rendering, and CosmosDB queries.',
  },
  {
    title: 'Quality Writing Tool',
    desc: 'Pub/Sub-based document workflow app with custom calendar, MSAL auth, edit & suggestion APIs. Delivered to production and awarded by business users.',
  },
];

export default function Projects() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Projects
      </Typography>
      <Stack spacing={3}>
        {projects.map((proj) => (
          <Card key={proj.title} variant="outlined" sx={{ backgroundColor: '#1e1e1e' }}>
            <CardContent>
              <Typography variant="h6" color="primary">
                {proj.title}
              </Typography>
              <Typography variant="body2" sx={{ my: 1 }}>
                {proj.desc}
              </Typography>
              {proj.link && (
                <Button
                  variant="outlined"
                  size="small"
                  href={proj.link}
                  target="_blank"
                  sx={{ mt: 1 }}
                >
                  View Live
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
