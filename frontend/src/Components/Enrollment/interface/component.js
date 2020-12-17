// -----------------------------
// File: src/Components/Enrollment/interface/component.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 16 dez 2020
// Brief: Enrollment component interface
// -----------------------------

// -----------------------------
// Import external libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { Typography, Autocomplete } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import Button from '@material-ui/core/Button';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import SuccessfulRegistration from '../../Commons/interface/SuccessfulRegistration.component';
import EnrollmentStyle from './styles';
import lang from '../../../locales/ptBR';
import { registerEnrollmentResetValue, registerEnrollmentRequest } from '../logic/actions';

function getStyles(course, courseList, theme) {
  return {
    fontWeight:
      courseList.indexOf(course) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Enrollment() {
  // -----------------------------
  // Declare helpers components
  const classes = EnrollmentStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const theme = useTheme();
  const feedbackStore = useSelector((state) => state.FeedbackReducers);
  const enrollmentStore = useSelector((state) => state.EnrollmentReducers);
  const studentStore = useSelector((state) => state.StudentReducers);
  const courseStore = useSelector((state) => state.CourseReducers);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // -----------------------------
  // Initialize internal states
  const [loadFeedback, setLoadFeedback] = useState(false);
  // const [studentSelected] = useState();
  const [courseList, setCourseList] = React.useState([]);
  const [courses, setCourseID] = React.useState([]);
  const [studentID, setStudendID] = React.useState([]);

  // -----------------------------
  // Feedback Store watcher
  useEffect(() => {
    feedbackStore.open && setLoadFeedback(false);
  }, [feedbackStore]);

  // -----------------------------
  // Save the selected student ID on its state
  const handleStudentSelection = (student) => {
    setStudendID(student._id);
    return student.email;
  };

  // -----------------------------
  // Verify course data and register weather its correct
  const handleSubmit = () => {
    if (studentID && courses) {
      const data = {
        student: studentID,
        courses,
      };
      dispatch(registerEnrollmentRequest(data));
    }
  };

  // -----------------------------
  // Save the selected courses ID on its state
  const handleCourseSelect = (event) => {
    const inputValue = event.target.value;
    setCourseList(inputValue);
    inputValue.map((course) => setCourseID([...courses, { _id: course._id }]));
  };

  // -----------------------------
  // Redirects the user to the  register page
  const handleRegisterAgain = () => {
    dispatch(registerEnrollmentResetValue());
    setLoadFeedback(false);
    history.push('/home/register_enrollment');
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
            {lang.registerEnrollmentTitle}
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
            {enrollmentStore.registered
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

                      {/* Student Search Field */}
                      <Autocomplete
                        freeSolo
                        id="student_search_list"
                        disableClearable
                        getOptionLabel={handleStudentSelection}
                        options={studentStore.data ? studentStore.data.map((student) => student) : ['Nenhum cadastro']}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            label="Selecione o estudante"
                            margin="normal"
                            variant="standard"
                            className={classes.input}
                            InputProps={{ ...params.InputProps, type: 'search' }}
                            required
                          />
                        )}
                      />

                      {/* Course Search Field */}
                      <FormControl className={classes.form}>
                        <InputLabel id="course-search-list-label">{lang.selectCourse}</InputLabel>
                        <Select
                          labelId="course-search-list-label"
                          id="course-search-list"
                          multiple
                          value={courseList}
                          onChange={handleCourseSelect}
                          input={(
                            <Input
                              id="course-search-input"
                              className={classes.input}
                            />
                          )}
                          renderValue={(selected) => (
                            <div className={classes.chips}>
                              {selected.map((value) => (
                                <Chip key={value._id} label={value.title} className={classes.chip} />
                              ))}
                            </div>
                          )}
                          MenuProps={MenuProps}
                        >
                          {courseStore.data ? courseStore.data.map((course) => (
                            <MenuItem key={course.title} value={course} style={getStyles(course, courseList, theme)}>
                              {course.title}
                            </MenuItem>
                          )) : 'Nenhum cadastro'}
                        </Select>
                      </FormControl>

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
                        {loadFeedback ? <CircularProgress size={25} color="inherit" /> : lang.registerEnrollmentButton}
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
