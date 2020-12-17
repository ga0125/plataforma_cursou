// -----------------------------
// File: src/Components/Main/interface/Main.component.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 14 dez 2020
// Brief: Main component interface - component
// -----------------------------

// -----------------------------
// Import external libraries
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

import { useTheme, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import HelpIcon from '@material-ui/icons/Help';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import VerticalSplitRoundedIcon from '@material-ui/icons/VerticalSplitRounded';
import VerticalSplitOutlinedIcon from '@material-ui/icons/VerticalSplitOutlined';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import FeedbackScreen from '../../Commons/interface/Feedback.component';
import MenuRoute from '../../../routes/MenuRoute';
import lang from '../../../locales/ptBR';
import Logo from '../../../assets/images/biologia_total_logo.png';
import mainStyle from './styles';
import { retrieveStudentRequest } from '../../Student/logic/actions';
import { retrieveCourseRequest } from '../../Course/logic/actions';

export default function Main() {
  // -----------------------------
  // Declare helpers components
  const classes = mainStyle();
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  // -----------------------------
  // Initialize internal states
  const [openSideBar, setOpenSidebar] = useState(true);
  const [menuSelect, setMenuSelect] = useState({
    value: 'adm_panel',
  });

  const handleMenuSelection = (value) => {
    setMenuSelect({ ...menuSelect, value });
    history.push(`/home/${value}/`);
  };

  // -----------------------------
  // Onload trigger
  useEffect(() => {
    dispatch(retrieveStudentRequest());
    dispatch(retrieveCourseRequest());
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openSideBar,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open-menu"
            onClick={() => setOpenSidebar(true)}
            edge="start"
            className={clsx(classes.menuButton, openSideBar && classes.hide)}
            hidden={!openSideBar}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openSideBar}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Grid className={classes.imgArea}>
            <img src={Logo} alt="" className={classes.logo} />
          </Grid>
          <IconButton onClick={() => setOpenSidebar(false)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Divider />

        <List>
          {/* Adm Panel Menu */}
          <ListItem key="adm-panel" className={classes.titleMenu}>
            <ListItemIcon className={classes.titleMenu}>
              <DashboardOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.titleMenu}>
                {lang.admPanel}
              </Typography>
            </ListItemText>
          </ListItem>

          {/* Add Student */}
          <ListItem
            key="register_student"
            className={menuSelect.value === 'register_student' ? classes.selectedItem : null}
            onClick={() => handleMenuSelection('register_student')}
            button
          >
            <ListItemIcon className={menuSelect.value === 'register_student' ? classes.selectedIconItem : null}>
              { menuSelect.value === 'register_student'
                ? <ContactsRoundedIcon />
                : <AccountBoxOutlinedIcon />}
            </ListItemIcon>
            <ListItemText primary={lang.registerStudent} />
            <ListItemIcon>
              <ChevronRightIcon className={menuSelect.value === 'register_student' ? classes.selectedIconItem : null} />
            </ListItemIcon>
          </ListItem>

          {/* Add Course */}
          <ListItem
            key="register_course"
            className={menuSelect.value === 'register_course' ? classes.selectedItem : null}
            onClick={() => handleMenuSelection('register_course')}
            button
          >
            <ListItemIcon className={menuSelect.value === 'register_course' ? classes.selectedIconItem : null}>
              { menuSelect.value === 'register_course'
                ? <MenuBookIcon />
                : <ImportContactsIcon />}
            </ListItemIcon>
            <ListItemText primary={lang.registerCourse} />
            <ListItemIcon>
              <ChevronRightIcon className={menuSelect.value === 'register_course' ? classes.selectedIconItem : null} />
            </ListItemIcon>
          </ListItem>

          {/* Add Enrollment */}
          <ListItem
            key="register_enrollment"
            className={menuSelect.value === 'register_enrollment' ? classes.selectedItem : null}
            onClick={() => handleMenuSelection('register_enrollment')}
            button
          >
            <ListItemIcon className={menuSelect.value === 'register_enrollment' ? classes.selectedIconItem : null}>
              { menuSelect.value === 'register_enrollment'
                ? <AddToPhotosIcon />
                : <LibraryBooksOutlinedIcon />}
            </ListItemIcon>
            <ListItemText primary={lang.registerEnrollment} />
            <ListItemIcon>
              <ChevronRightIcon className={menuSelect.value === 'register_enrollment' ? classes.selectedIconItem : null} />
            </ListItemIcon>
          </ListItem>

          {/* Bottom Menu */}

          <Box mt={2}>
            <Divider className={classes.bottomDivider} />

            {/* HighSchool Portal */}
            <ListItem
              key="web_portal"
              className={menuSelect.value === 'web_portal' ? classes.selectedItem : null}
              onClick={() => handleMenuSelection('web_portal')}
              button
            >
              <ListItemIcon className={menuSelect.value === 'web_portal' ? classes.selectedIconItem : null}>
                { menuSelect.value === 'web_portal'
                  ? <VerticalSplitRoundedIcon />
                  : <VerticalSplitOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={lang.webPortal} />
            </ListItem>

            {/* Blog Page */}
            <ListItem
              key="blog_page"
              className={menuSelect.value === 'blog_page' ? classes.selectedItem : null}
              onClick={() => handleMenuSelection('blog_page')}
              button
            >
              <ListItemIcon className={menuSelect.value === 'blog_page' ? classes.selectedIconItem : null}>
                { menuSelect.value === 'blog_page'
                  ? <HelpIcon />
                  : <HelpOutlineIcon />}
              </ListItemIcon>
              <ListItemText primary={lang.blogPage} />
            </ListItem>
          </Box>
        </List>
      </Drawer>
      {/* Menu Content */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: openSideBar,
        })}
      >
        <Container maxWidth="lg" className={classes.container}>
          <MenuRoute />
          <FeedbackScreen />
        </Container>
      </main>

    </div>
  );
}
