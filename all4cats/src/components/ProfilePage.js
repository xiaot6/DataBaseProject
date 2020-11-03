import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import {auth} from "../firebase";
import {makeStyles} from '@material-ui/core/styles';
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexDirection: "column",
      justifyContent: "center"
  },
}));

const ProfilePage = () => {
  const user = useContext(UserContext);
  const {displayName, email} = user;
  const classes = useStyles();
  console.log(displayName);
  console.log(email);
  return (
    <div className={classes.root}>
      <Typography>
        {displayName}
      </Typography>
      <Typography>
        {email}
      </Typography>
      <Button onClick = {() => {auth.signOut()}}>
        Sign Out
      </Button>
    </div>
  ) 
};
export default ProfilePage;