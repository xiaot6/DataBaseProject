import logoLightSmall from './assets/logo_transparent_light_small.png';
import { Switch, Route, Link } from "react-router-dom";
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
import Price from "./components/Price";
import AddPrice from "./components/AddPrice";
import Prediction from "./components/Prediction";
import User from "./components/User";
import UserProvider from "./providers/UserProvider";


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
    console.log(newValue);
  };

  return (
    <div className="App">
      <UserProvider>
        <div className={classes.root}>
          <AppBar position="static" style={{background: '#1C4954'}}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} onClick={(event, newValue) => { setValue(0) }} color="inherit" aria-label="menu" to='/' component={Link}>
                <img src={logoLightSmall} alt='Logo' height='60'/>
              </IconButton>
              <div className={classes.demo2}>
                <StyledTabs value={value !== "login" ? value : false} onChange={handleChange} aria-label="styled tabs navbar">
                  <StyledTab label="Price" to='/price' component={Link}/>
                  <StyledTab label="Add Price" to='/addprice' component={Link}/>
                  <StyledTab label="Prediction" to='/prediction' component={Link}/>
                </StyledTabs>
                <Typography className={classes.padding} />
              </div>
              <Button color="inherit" onClick={(event, newValue) => { setValue("login") }} component={Link} to="/user">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Switch>
            <Route exact path={["/", "/price"]} component={Price} />
            <Route path="/addprice" component={AddPrice} />
            <Route path="/prediction" component={Prediction} />
            <Route path="/user" component={User} />
          </Switch>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
