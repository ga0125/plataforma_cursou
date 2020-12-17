import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default function FeedbackScreen() {
  const feedbackStore = useSelector((state) => state.FeedbackReducers);
  const [scope, setScope] = React.useState({
    open: false,
    message: '',
    type: 'info',
  });

  useEffect(() => {
    setScope({
      ...scope,
      open: feedbackStore.open,
      message: feedbackStore.message,
      type: feedbackStore.type,
    });
  }, [feedbackStore]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setScope({ ...scope, open: false });
  };

  return (
    <Snackbar
      open={scope.open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <MuiAlert onClose={handleClose} severity={scope.type} elevation={6} variant="filled">
        {scope.message}
      </MuiAlert>
    </Snackbar>
  );
}
