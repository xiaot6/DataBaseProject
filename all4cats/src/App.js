import logo from './logo_transparent.png';
import logoLightSmall from './logo_transparent_light_small.png';
import './App.css';
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import React from 'react';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  demo2: {
    flexGrow: 1,
  },
}));

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'grey',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static" style={{background: '#1C4954'}}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img src={logoLightSmall} alt='Logo' height='60'></img>
            </IconButton>
            <div className={classes.demo2}>
              <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                <StyledTab label="Workflows" />
                <StyledTab label="Datasets" />
                <StyledTab label="Connections" />
              </StyledTabs>
              <Typography className={classes.padding} />
            </div>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <header className="App-header">
        <img src={logo} alt='Logo' height='300'></img>
        <Typography variant='h5'>
          Welcome to CS 411 Final Project - All4Cats.
        </Typography>
        <a
          className="App-link"
          href="https://wiki.illinois.edu/wiki/display/CS411AAFA20/All4Cat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Homepage
        </a>
      </header>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
