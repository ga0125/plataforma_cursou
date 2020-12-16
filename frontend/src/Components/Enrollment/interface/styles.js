// -----------------------------
// File: src/Components/Enrollment/interface/styles.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 16 dez 2020
// Brief: Enrollment style interface
// -----------------------------

import { makeStyles } from '@material-ui/core/styles';

const EnrollmentStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  breadcrumb: {
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '95%',
    [theme.breakpoints.down('lg')]: {
      height: '93%',
    },
    [theme.breakpoints.down('md')]: {
      height: '95%',
    },
  },
  boxRoot: {
    marginTop: 30,
  },
  pageTitle: {
    color: '#073558',
    fontWeight: 'bold',
    fontSize: 22,
  },
  avatarGrid: {
    marginTop: 15,
    width: '16%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    color: '#adadad',
  },
  form: {
    width: '100%',
  },
  input: {
    margin: 10,
  },
  dateInput: {
    width: '50%',
    marginLeft: 10,
  },
  cancelButton: {
    color: '#073558',
    borderColor: '#073558',
  },
  submitButton: {
    width: 220,
    color: '#073558',
    borderColor: '#073558',
    '&:hover': {
      backgroundColor: '#073558',
      color: '#FFFF',
    },
  },
  registerAgainButton: {
    width: 220,
    color: '#073558',
    borderColor: '#073558',
    '&:hover': {
      backgroundColor: '#073558',
      color: '#FFFF',
    },
  },
  actionButtons: {
    marginLeft: 170,
    height: 115,
  },
  actionRegisterButtons: {
    marginLeft: 83,
    height: 83,
  },
}));

export default EnrollmentStyle;
