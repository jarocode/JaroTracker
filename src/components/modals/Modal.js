import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Fade, Modal, Backdrop, Grid, Paper, Typography, InputBase, Button} from '@material-ui/core';
import {FindInPage, ChevronRight, Group, MoreHoriz, AttachFile, PlaylistAddCheck} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: '1px 1px 15px 15px #666',
    padding: theme.spacing(2, 4, 3),
    marginTop: '-10em',
    minWidth: '40rem',
    minHeight: '15rem',
    borderRadius: '10px',
  },

  issueTitle: {
    "& input::placeholder": {
      fontSize: "1.5em",
      color: "#000",
    }
  },

  icon: {
    color: '#8f8f8f'
  },

  heading: {
    marginTop: '.5em'
  },

  span: {
    fontSize: '2em',
    marginLeft: '1.2rem',
    color: '#9f9f9f'
  },
  paper: {
     width: '5rem',
     fontSize: '.95em',
     padding: '3px',
     background: '#efefff'
  },
  bottom: {
    marginTop: '1rem',
    borderTop: '1px solid #efefef',
    paddingTop: '1.5rem'
  }
  
}));

export default function TransitionsModal({open, handleClose}) {
  const classes = useStyles();
 return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} >
          <Box className={classes.box}>
              <Grid  container spacing={2} >
                  <Grid xs={9} container spacing={2} className={classes.heading}>
                    <Grid xs={3}> 
                      <Paper className={classes.paper}><Group className={classes.icon}/>JAR</Paper>
                    </Grid>
                   <Grid xs={1}>
                    <ChevronRight className={classes.icon} style={{fontSize: '1.5em', marginTop: '.3em'}}/>
                   </Grid>
                    <Grid xs={3}>
                      <Typography variant="subtitle1" component="h2" style={{margin:' .2em 0 0 -.8em'}}>
                        New issue
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid xs={3}>
                    <Box style={{float: 'right'}}>
                      <FindInPage className={classes.icon}/>
                      <span className={classes.span}>&times;</span>
                    </Box>
                  </Grid> 
              </Grid>
             <Box style={{marginTop: '2rem'}}>
               <Box>
                <InputBase
                    placeholder="Issue title"
                    className={classes.issueTitle}
                    inputProps={{ 'aria-label': 'Issue title' }}
                    fullWidth
                    autoFocus
                />
               </Box>
               <Box>
                <InputBase
                    placeholder="Add description..."
                    inputProps={{ 'aria-label': 'Add description...' }}
                    fullWidth
                />
               </Box>
             </Box>

            <Grid container style={{marginTop: '2rem'}} >
                <Grid xs={9} container spacing={2}>
                   <Grid xs={3}>
                    <Paper className={classes.paper}><PlaylistAddCheck className={classes.icon} style={{fontSize: '1.2em'}}/>Todo</Paper>
                   </Grid>
                   <Grid xs={3}>
                    <Paper className={classes.paper}><Group className={classes.icon} style={{fontSize: '1.2em'}}/>Priority</Paper>
                   </Grid>
                   <Grid xs={3}>
                    <Paper className={classes.paper}><Group className={classes.icon} style={{fontSize: '1.2em'}}/>Assignee</Paper>
                   </Grid>
                   <Grid xs={3}>
                    <Paper className={classes.paper}><Group className={classes.icon} style={{fontSize: '1.2em'}}/>Label</Paper>
                   </Grid>
                </Grid>
                <Grid xs={3}>
                <Grid xs={1}>
                    <MoreHoriz className={classes.icon}/>
                   </Grid>
                </Grid>
            </Grid>
            
            <Box className={classes.bottom}>
              <Grid container spacing={3}>
                <Grid xs={6}>
                  <AttachFile className={classes.icon} style={{fontSize: '1.5em'}}/>
                </Grid>
                <Grid xs={6}>
                  <Button variant="contained" color="primary" size="small" style={{float: 'right'}}>Save issue</Button>
                </Grid>
              </Grid>
            </Box>
              
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
