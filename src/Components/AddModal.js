import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FAB from './FAB';

export default function AddModal({handleAdd}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // const handleChangeTitle = (e) => {
  //   setFormData({ ...formData, title: e.target.value });
  // };

  // const handleChangeContent = (e) => {
  //   setFormData({ ...formData, content: e.target.value });
  // };

  return (
    <div>
      <FAB handleClickOpen={handleClickOpen}/>
      {/* // TODO: */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New task</DialogTitle>
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
          />
          <span style={{ marginLeft: 10 }}/>
          <TextField
            color="secondary"
            autoFocus
            margin="dense"
            id="content"
            label="Content"
            type="text"
            multiline
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button 
            onClick={() => {
              setOpen(false);
              handleAdd(formData.title, formData.content)
            }}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
