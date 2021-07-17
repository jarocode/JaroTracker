import React, {Fragment} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Button, Grid, Paper, Typography, Checkbox, Avatar, Badge} from '@material-ui/core';
import {Add, Category, MoreHoriz} from '@material-ui/icons';

import DashboardLayout from '../layout/index';


const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

const useStyles = makeStyles((theme) => ({
    container: {
        background: '',
        marginTop: '2rem',
        minHeight: '100vh',
    },

    paper: {
        minHeight: '2rem',
        boxShadow: '2px 2px 7px 5px #efefff',
        marginTop: '2rem',
        padding: '1.5rem'
    },

    avatar: {
        background: '#234567',
        height: '1.3em',
        width: '1.3em'
    },

    myIssues: {
        borderBottom: '1px solid #dfdfdf',
        padding: '.5em  0 .5em 0',
        fontSize: '.95em',
        marginBottom: '2em'
    },
    issueText: {
        fontSize: '1em'
    }
}));


const MyIssues = () => {
    const classes = useStyles();
    return (
        <DashboardLayout>
        <Fragment>
            <div className={classes.container}>
                <Grid container>
                    <Grid xs={10}>
                        <Typography variant="h6">My issues <span>4</span> 
                        <Button 
                            variant="outlined" 
                            size="small"
                            startIcon={<Add/>}
                            style={{marginLeft: '2rem'}}
                        >
                            filter
                        </Button>
                        </Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Button 
                            color="primary" 
                            startIcon={<Category/>}
                            style={{float: 'right'}}
                        >
                        </Button>
                    </Grid>
                </Grid>
                <div style={{marginTop: '.5rem'}}>
                    <Paper className={classes.paper}>
                        <Grid container>
                            <Grid container xs={6}>
                                <Grid xs={3} style={{textAlign: 'center'}}><Typography variant="body1">Assigned</Typography></Grid>
                                <Grid xs={3} style={{textAlign: 'center'}}><Typography variant="body1">Created</Typography></Grid>
                                <Grid xs={3} style={{textAlign: 'center'}}><Typography variant="body1">Subscribed</Typography></Grid>
                                <Grid></Grid>
                                <Grid></Grid>
                            </Grid>
                            <Grid xs={6}></Grid>
                        </Grid>
                    </Paper>
                    <Paper className={classes.paper}>
                        {
                            [1,2,3,4].map(el => (
                                <Grid container spacing={3} className={classes.myIssues}>
                                <Grid xs={8}>
                                    <Typography variant="body1" className={classes.issueText}>
                                        <span><MoreHoriz/></span>
                                        <span>JAR-22</span>
                                        <span>
                                            <Checkbox
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                        </span>
                                        <span style={{fontWeight: 'bold'}}>User course button should not take user out of the page</span>
                                    </Typography>
                                </Grid>
                                <Grid xs={4}>
                                    <Typography variant="body1" style={{float: 'right'}} className={classes.issueText}>
                                        <span style={{marginRight: '1em'}}>July 16</span>
                                        <StyledBadge
                                            overlap="circular"
                                            anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                            }}
                                            variant="dot"
                                        >
                                            <Avatar className={classes.avatar}>
                                                <span style={{fontSize: '.6em'}}>OC</span>
                                            </Avatar>
                                        </StyledBadge>
                                    </Typography>
                                </Grid>
                            </Grid>
                            ))
                            }
                    </Paper>
                </div>
                
            </div>
        </Fragment>
      </DashboardLayout>
    )
}

export default MyIssues
