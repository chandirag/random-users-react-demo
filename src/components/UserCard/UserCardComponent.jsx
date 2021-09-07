import React from 'react';
import { hexToRgb, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 260
  },
  userDetail: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 10,
    marginTop: 10
  },
  userDetailText: {
    fontSize: 15,
    marginLeft: 10
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 20,
    marginTop: 20,
    lineHeight: 1.4,
    color: hexToRgb("#482890"),
  },
  username: {
    fontSize: 18,
    marginRight: 20,
    marginTop: 5,
    color: hexToRgb("#FF615A"),
  },
  avatar: {
    height: '100px', 
    width: '100px'
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  logo: {
    marginTop: '-40px',
    marginRight: '20px',
    width: '80px',
  }
});

const UserCardComponent = ({user}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.header}>
          <Avatar className={classes.avatar} src={user.avatar} display="inline" />
          <div display="inline" align="right">
            <Typography className={classes.name}>{user.first_name} {user.last_name}</Typography>
            <Typography className={classes.username} color="textSecondary" >{user.username}</Typography>
          </div>
        </div>

        <div className={classes.userDetail} style={({ paddingTop: 10 })}>
          <EmailOutlinedIcon style={{ color: hexToRgb("#482890") }}/>
          <Typography className={classes.userDetailText}>{user.email}</Typography>
        </div>

        <div className={classes.userDetail}>
          <PhoneOutlinedIcon style={{ color: hexToRgb("#482890") }}/>
          <Typography className={classes.userDetailText}>{user.phone_number}</Typography>
        </div>

        <div className={classes.userDetail}>
          <CakeOutlinedIcon style={{ color: hexToRgb("#482890") }}/>
          <Typography className={classes.userDetailText}>{user.date_of_birth}</Typography>
        </div>

        <img className={classes.logo} src="../../assets/logo.png" alt="logo" display="inline" align="right" />
      </CardContent>

    </Card>
  );
}

export default UserCardComponent;