import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Edit as EditIcon } from '@material-ui/icons/';

export default function EditModal({id, title, content, handleEdit}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ title: title, content: content });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    setOpen(false);
    handleEdit(id, formData.title, formData.content);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<EditIcon />}
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      {/* // TODO: */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit task</DialogTitle>
        <DialogContent>
          <TextField
            color="secondary"
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            onChange={handleChange}
            value={formData.title}
          />
          <span style={{ marginLeft: 10 }}/>
          <TextField
            color="secondary"
            margin="dense"
            id="content"
            label="Content"
            type="text"
            multiline
            fullWidth
            onChange={handleChange}
            value={formData.content}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
