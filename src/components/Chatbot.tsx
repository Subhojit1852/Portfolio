// components/Chatbot.tsx
import { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  IconButton, 
  Dialog, 
  DialogContent, 
  TextField, 
  Avatar, 
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm your AI assistant. Ask me about Subhojit's skills or experience!", sender: 'bot' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: input })
      });

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.response, sender: 'bot' }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: "Sorry, I couldn't process your request. Please try again.", 
        sender: 'bot' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1000
        }}
      >
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: '#00ffc3',
            color: '#0f1117',
            width: 64,
            height: 64,
            '&:hover': {
              backgroundColor: '#00e6b8',
              transform: 'scale(1.1)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          <SmartToyIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>

      {/* Chat dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            position: 'fixed',
            bottom: 100,
            right: 32,
            width: 350,
            maxWidth: '90vw',
            height: 500,
            maxHeight: '70vh',
            backgroundColor: '#0f1117',
            border: '1px solid #00ffc3',
            borderRadius: 2,
            overflow: 'hidden'
          }
        }}
      >
        <Box
          sx={{
            backgroundColor: '#00ffc3',
            color: '#0f1117',
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            AI Assistant
          </Typography>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ flex: 1, overflowY: 'auto' }}>
          <List>
            {messages.map((msg, index) => (
              <ListItem 
                key={index} 
                sx={{
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  alignItems: 'flex-start'
                }}
              >
                {msg.sender === 'bot' && (
                  <Avatar sx={{ 
                    bgcolor: '#00ffc3', 
                    color: '#0f1117',
                    mr: 1,
                    width: 32,
                    height: 32
                  }}>
                    <SmartToyIcon fontSize="small" />
                  </Avatar>
                )}
                <ListItemText
                  primary={msg.text}
                  sx={{
                    bgcolor: msg.sender === 'user' ? '#00ffc3' : '#1e1e1e',
                    color: msg.sender === 'user' ? '#0f1117' : '#ffffff',
                    p: 1.5,
                    borderRadius: 2,
                    maxWidth: '70%',
                    wordBreak: 'break-word'
                  }}
                />
              </ListItem>
            ))}
            {loading && (
              <ListItem sx={{ justifyContent: 'flex-start' }}>
                <Avatar sx={{ 
                  bgcolor: '#00ffc3', 
                  color: '#0f1117',
                  mr: 1,
                  width: 32,
                  height: 32
                }}>
                  <SmartToyIcon fontSize="small" />
                </Avatar>
                <CircularProgress size={24} color="inherit" />
              </ListItem>
            )}
            <div ref={messagesEndRef} />
          </List>
        </DialogContent>

        <Box
          sx={{
            p: 2,
            borderTop: '1px solid #1e1e1e',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Ask about Subhojit..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#ffffff',
                '& fieldset': {
                  borderColor: '#00ffc3',
                },
                '&:hover fieldset': {
                  borderColor: '#00ffc3',
                },
              },
              mr: 1
            }}
          />
          <IconButton 
            onClick={handleSend}
            disabled={!input.trim() || loading}
            sx={{ 
              color: '#00ffc3',
              '&:disabled': {
                color: '#666666'
              }
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Dialog>
    </>
  );
}