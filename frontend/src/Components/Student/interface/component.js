// -----------------------------
// File: src/Components/Student/interface/component.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 14 dez 2020
// Brief: Student component interface
// -----------------------------

// -----------------------------
// Import external libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import TextField from '@material-ui/core/TextField';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SuccessfulRegistration from '../../Commons/interface/SuccessfulRegistration.component';
import { registerStudentRequest, registerStudentResetValue } from '../logic/actions';
import { validateEmail, validateName } from '../../../drivers/validators';
import StudentStyle from './styles';
import lang from '../../../locales/ptBR';

export default function Student() {
  // -----------------------------
  // Declare helpers components
  const classes = StudentStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const feedbackStore = useSelector((state) => state.FeedbackReducers);
  const studentStore = useSelector((state) => state.StudentReducers);

  // -----------------------------
  // Initialize internal states
  const [name, setName] = useState({
    value: '',
    isInvalid: false,
  });
  const [email, setEmail] = useState({
    value: '',
    isInvalid: false,
  });
  const [confirmEmail, setConfirmEmail] = useState({
    value: '',
    isInvalid: false,
  });
  const [birthday, setBirthday] = useState(new Date());
  const [loadFeedback, setLoadFeedback] = useState(false);
  // -----------------------------
  // Feedback Store watcher
  useEffect(() => {
    feedbackStore.open && setLoadFeedback(false);
  }, [feedbackStore]);

  // -----------------------------
  // Verify student data and register weather its correct
  const handleSubmit = () => {
    const checkName = validateName(name.value);
    const checkEmail = validateEmail(email.value);
    const checkEmailConfirmation = validateEmail(confirmEmail.value);

    // Setting up states field errors according the rules above
    !checkName && setName({ ...name, isInvalid: true });
    !checkEmail && setEmail({ ...email, isInvalid: true });
    !checkEmailConfirmation && setConfirmEmail({ ...confirmEmail, isInvalid: true });

    // Starting loading when we're sending a request
    setLoadFeedback(true);

    // Dispatching user's data to request action
    if (checkName && checkEmail && checkEmailConfirmation) {
      const data = {
        name: name.value,
        email: email.value,
        birthDay: birthday,
      };

      dispatch(registerStudentRequest(data));
    } else {
      setLoadFeedback(false);
    }
  };

  // -----------------------------
  // Redirects the user to the  register page
  const handleRegisterAgain = () => {
    dispatch(registerStudentResetValue());
    setLoadFeedback(false);
    history.push('/home/register_student');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="lg">

        {/* Breadcum with Title */}
        <Breadcrumbs separator="›" aria-label="breadcrumb" className={classes.breadcrumb}>
          <Link color="inherit" href="/home">
            {lang.homePage}
          </Link>
          <Typography className={classes.pageTitle}>
            {lang.registerStudentTitle}
          </Typography>
        </Breadcrumbs>

        {/* Content */}
        <Box borderradius={8} boxshadow={3} className={classes.cardContainer}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {studentStore.registered
              ? (
                <>
                  <Grid item xs={12}>
                    <SuccessfulRegistration />
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    className={classes.actionRegisterButtons}
                  >
                    <Grid item>
                      <Button
                        color="primary"
                        className={classes.cancelButton}
                        startIcon={<ArrowBackIcon />}
                        onClick={() => history.push('/home/')}
                      >
                        {lang.cancelButton}
                      </Button>
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="primary"
                        className={classes.registerAgainButton}
                        onClick={handleRegisterAgain}
                      >
                        {lang.registerAgain}
                      </Button>
                    </Grid>
                  </Grid>
                </>
              )
              : (
                <>
                  <Grid item className={classes.avatarGrid}>
                    <Avatar className={classes.avatar} />
                  </Grid>

                  <Grid item>
                    <form className={classes.form}>

                      {/* Name Field */}
                      <TextField
                        fullWidth
                        className={classes.input}
                        onBlur={(event) => setName({
                          ...name, value: event.target.value,
                        })}
                        onChange={() => setName({ ...name, isInvalid: false })}
                        error={name.isInvalid}
                        id="name-input"
                        label={lang.name}
                        type="name"
                        autoComplete="name"
                        variant="standard"
                        required
                      />

                      {/* Email Field */}
                      <TextField
                        fullWidth
                        className={classes.input}
                        onBlur={(event) => setEmail({
                          ...email, value: event.target.value,
                        })}
                        onChange={() => setEmail({ ...email, isInvalid: false })}
                        error={email.isInvalid}
                        id="email-input"
                        label={lang.email}
                        name="email"
                        type="email"
                        autoComplete="email"
                        variant="standard"
                        required
                      />

                      {/* Email Confirm Field */}
                      <TextField
                        fullWidth
                        className={classes.input}
                        onBlur={(event) => setConfirmEmail({
                          ...confirmEmail, value: event.target.value,
                        })}
                        onChange={() => setConfirmEmail({ ...confirmEmail, isInvalid: false })}
                        error={confirmEmail.isInvalid}
                        id="email-confirm-input"
                        label={lang.confirmEmail}
                        name="email-confirm"
                        type="email-confirm"
                        autoComplete="email"
                        variant="standard"
                        required
                      />

                      <DesktopDatePicker
                        inputFormat="dd/MM/yyyy"
                        label="Data de nascimento"
                        value={birthday}
                        onChange={(value) => setBirthday(value)}
                        renderInput={(params) => (
                          <TextField
                            id="date-picker-desktop"
                            margin="normal"
                        // eslint-disable-next-line react/jsx-props-no-spreading
                            {...params}
                            variant="standard"
                            className={classes.dateInput}
                          />
                        )}
                        OpenPickerButtonProps={{
                          'aria-label': 'change date',
                        }}
                        required
                      />
                    </form>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    className={classes.actionButtons}
                  >
                    <Grid item xs>
                      <Button
                        color="primary"
                        className={classes.cancelButton}
                        startIcon={<ArrowBackIcon />}
                        onClick={() => history.push('/home/')}
                      >
                        {lang.cancelButton}
                      </Button>
                    </Grid>

                    <Grid item xs={6} />

                    <Grid item xs>
                      <Button
                        variant="outlined"
                        color="primary"
                        className={classes.submitButton}
                        onClick={handleSubmit}
                      >
                        {loadFeedback ? <CircularProgress size={25} color="inherit" /> : lang.registerStudentButton}
                      </Button>
                    </Grid>
                  </Grid>
                </>
              )}

          </Grid>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}
