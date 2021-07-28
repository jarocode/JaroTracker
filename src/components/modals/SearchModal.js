import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Fade, Backdrop, Modal, IconButton, InputBase, Divider, Popover, Button, Typography} from '@material-ui/core';
import {Cancel, Search, ArrowDropDown} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: '1px 1px 15px 15px #666',
        padding: theme.spacing(2, 4, 3),
        marginTop: '-30em',
        minWidth: '45rem',
        minHeight: '3.5rem',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center'
      },
    iconButton: {
        padding: 10,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    divider: {
        height: 28,
        margin: 4,
    },
  }));


  

const SearchModal = ({open, handleClose}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePop = () => {
        setAnchorEl(null);
    };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;
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
            <Fade in={open}>
                <Paper className={classes.paper}>
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <Search />
                    </IconButton>
                    <InputBase
                        className={classes.input}
                        placeholder="Search issues..."
                        inputProps={{ 'aria-label': 'search issues' }} 
                    />
                    <Divider className={classes.divider} orientation="vertical" />
                    <div>
                        <Button aria-describedby={id}  onClick={handleClick} style={{textTransform: 'none'}} endIcon={<ArrowDropDown/>}>
                            Filter issues
                        </Button>
                        <Popover
                            id={id}
                            open={openPopover}
                            anchorEl={anchorEl}
                            onClose={handleClosePop}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                            }}
                        >
                            <div style={{width: '25rem', height: '20rem'}}></div>
                        </Popover>
                    </div>
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <Cancel/>
                    </IconButton>
                </Paper>
            </Fade>
        </Modal>
    </div>
  );
}

export default SearchModal;
