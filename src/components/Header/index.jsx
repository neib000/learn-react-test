import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import Register from 'features/Auth/components/Register';
const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}));
export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e, reason) => {
    if (reason === 'backdropClick') return;

    // otherwise close current dialog
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Show
          </Typography>

          <NavLink className={classes.link} to="/todo">
            <Button color="inherit">Todo</Button>
          </NavLink>

          <NavLink className={classes.link} to="/albums">
            <Button color="inherit">Album</Button>
          </NavLink>

          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog
        onClose={handleClose}
        // BackdropComponent
        disableEscapeKeyDown
        open={open}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText component="div" id="alert-dialog-description">
            <Register />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
