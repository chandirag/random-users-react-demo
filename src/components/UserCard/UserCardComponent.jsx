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

        <img className={classes.logo} src="data:image/png;base64,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" display="inline" align="right" />
      </CardContent>

    </Card>
  );
}

export default UserCardComponent;