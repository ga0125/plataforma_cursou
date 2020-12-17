// -----------------------------
// File: src/Components/Course/interface/component.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 16 dez 2020
// Brief: Course component interface
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
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import Button from '@material-ui/core/Button';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import TextField from '@material-ui/core/TextField';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SuccessfulRegistration from '../../Commons/interface/SuccessfulRegistration.component';
import CourseStyle from './styles';
import lang from '../../../locales/ptBR';
import { validateCourseName } from '../../../drivers/validators';
import { registerCourseRequest, registerCourseResetValue } from '../logic/actions';

export default function Course() {
  // -----------------------------
  // Declare helpers components
  const classes = CourseStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const feedbackStore = useSelector((state) => state.FeedbackReducers);
  const courseStore = useSelector((state) => state.CourseReducers);

  // -----------------------------
  // Initialize internal states
  const [courseTitle, setCourseTitle] = useState({
    value: '',
    isInvalid: false,
  });
  const [courseDescription, setCourseDescription] = useState({
    value: '',
    isInvalid: false,
  });
  const [loadFeedback, setLoadFeedback] = useState(false);

  // -----------------------------
  // Feedback Store watcher
  useEffect(() => {
    feedbackStore.open && setLoadFeedback(false);
  }, [feedbackStore]);

  // -----------------------------
  // Verify course data and register weather its correct
  const handleSubmit = () => {
    const checkCourseTitle = validateCourseName(courseTitle.value);

    // Setting up states field errors according the rules above
    !checkCourseTitle && setCourseTitle({ ...courseTitle, isInvalid: true });

    // Starting loading when we're sending a request
    setLoadFeedback(true);

    // Dispatching user's data to request action
    if (checkCourseTitle) {
      const data = {
        title: courseTitle.value,
        description: courseDescription.value,
      };

      dispatch(registerCourseRequest(data));
    } else {
      setLoadFeedback(false);
    }
  };

  // -----------------------------
  // Redirects the user to the  register page
  const handleRegisterAgain = () => {
    dispatch(registerCourseResetValue());
    setLoadFeedback(false);
    history.push('/home/register_course');
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
            {lang.registerCourseTitle}
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
            {courseStore.registered
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
                  <Grid item xs={12} className={classes.boxRoot} />

                  <Grid item className={classes.avatarGrid}>
                    <MenuBookOutlinedIcon className={classes.avatar} />
                  </Grid>

                  <Grid item xs={9}>
                    <form className={classes.form}>

                      {/* Course Title Field */}
                      <TextField
                        fullWidth
                        className={classes.input}
                        onBlur={(event) => setCourseTitle({
                          ...courseTitle, value: event.target.value,
                        })}
                        onChange={() => setCourseTitle({ ...courseTitle, isInvalid: false })}
                        error={courseTitle.isInvalid}
                        id="name-input"
                        label={lang.courseTitle}
                        type="name"
                        autoComplete="name"
                        variant="standard"
                        required
                      />

                      {/* Course Description Field */}
                      <TextField
                        fullWidth
                        multiline
                        placeholder="Descreva este curso detalhadamente."
                        className={classes.input}
                        onBlur={(event) => setCourseDescription({
                          ...courseDescription, value: event.target.value,
                        })}
                        onChange={() => setCourseDescription({ ...courseDescription, isInvalid: false })}
                        error={courseDescription.isInvalid}
                        id="course-description"
                        label={lang.courseDescription}
                        name="course-description"
                        type="description"
                        autoComplete="description"
                        variant="standard"
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
                        {loadFeedback ? <CircularProgress size={25} color="inherit" /> : lang.registerCourseButton}
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
