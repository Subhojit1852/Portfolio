import { Box, Typography, Button, Stack } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <Box sx={{ textAlign: 'center', py: 12, position: 'relative' }}>
      {/* <BackgroundParticles /> */}

      <Typography variant="h3" color="primary" gutterBottom>
        Subhojit Ganguly
      </Typography>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Software Engineer | GenAI Developer | LLM & FastAPI Enthusiast
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          href="/Subhojit_Ganguly_Resume.pdf"
          target="_blank"
        >
          View Resume
        </Button>
        <Button
          variant="outlined"
          startIcon={<FaLinkedin />}
          href="https://www.linkedin.com/in/subhojit-ganguly-53025618b"
          target="_blank"
        >
          LinkedIn
        </Button>
        <Button
          variant="outlined"
          startIcon={<FaGithub />}
          href="https://github.com/Subhojit1852"
          target="_blank"
        >
          GitHub
        </Button>
      </Stack>
    </Box>
  );
}
