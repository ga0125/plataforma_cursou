// -----------------------------
// File: src/Components/Main/interface/styles.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 14 dez 2020
// Brief: Main component interface - styles
// -----------------------------

import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 340;

const mainStyle = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#24292E',
      outline: '1px solid slategrey',
    },
  },
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#003558',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(10),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  imgArea: {
    width: '100%',
    display: 'flex',
    marginLeft: 10,
    alignItems: 'center',
  },
  logo: {
    width: 137,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  bottom: {
    marginTop: 30,
    width: '100%',
  },
  menuItem: {
    fontSize: 16,
    color: '#434d56',
    '&:hover': {
      color: '#073558',
    },
  },
  fontItem: {
    '&:hover': {
      fontWeight: 'bold',
      color: '#073558',
    },
  },
  titleMenu: {
    fontWeight: 'bold',
    color: '#073558',
  },
  selectedItem: {
    backgroundColor: '#073558',
    color: '#FFF',
    borderRadius: '0px 20px 20px 0px',
    '&:hover': {
      backgroundColor: '#073558',
    },
  },
  selectedIconItem: {
    color: '#FFF',
  },
  bottomDivider: {

  },

}));

export default mainStyle;
