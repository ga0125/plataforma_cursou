import React from 'react';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import CommonsStyle from './styles';
import lang from '../../../locales/ptBR';

export default function SuccessfulRegistration() {
  const classes = CommonsStyle();
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.actionRegisterButtons}
    >
      <Grid item xs={12} className={classes.alignGrid}>
        <CheckCircleOutlinedIcon className={classes.checkedIcon} />
      </Grid>

      <Grid item xs={12} className={classes.alignGrid}>
        <Typography className={classes.registeredText}>
          {lang.successfulRegistration}
        </Typography>
      </Grid>

    </Grid>

  );
}
