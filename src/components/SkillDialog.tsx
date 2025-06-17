// components/SkillDialog.tsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface SkillDialogProps {
  open: boolean;
  onClose: () => void;
  skillName: string;
  skillContext: string;
}

const SkillDialog: React.FC<SkillDialogProps> = ({ open, onClose, skillName, skillContext }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          background: '#0f1117',
          border: '1px solid #00ffc3',
          color: '#ffffff',
          borderRadius: 2,
          padding: 2,
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography fontWeight="bold" color="#00ffc3">{skillName}</Typography>
        <IconButton onClick={onClose} sx={{ color: '#00ffc3' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography>{skillContext}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default SkillDialog;
