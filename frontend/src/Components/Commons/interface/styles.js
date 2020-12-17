// -----------------------------
// File: src/Components/Commons/interface/styles.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 16 dez 2020
// Brief: Commons component interface - styles
// -----------------------------
import { makeStyles } from '@material-ui/core/styles';

const CommonsStyle = makeStyles(() => ({
  checkedIcon: {
    fontSize: 120,
    color: '#003558',
    marginTop: 90,
  },
  alignGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  registeredText: {
    color: '#003558',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 90,
  },
}));

export default CommonsStyle;
