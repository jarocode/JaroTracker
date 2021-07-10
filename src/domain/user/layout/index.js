import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    CssBaseline, 
    Collapse, 
    List, 
    Toolbar, 
    AppBar, 
    Drawer, 
    Typography, 
    Divider, 
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import {
    ChevronLeft, 
    ExpandLess, 
    ExpandMore, 
    ChevronRight, 
    Menu,  
    Inbox, 
    Mail 
} from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [nextListOpen, setNextListOpen] = React.useState(false);
  const [lastListOpen, setLastListOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleTopListClick = () => {
    setOpen(!open);
  };
  const handleNextListClick = () => {
    setNextListOpen(!nextListOpen);
  };
  const handleLastListClick = () => {
    setLastListOpen(!lastListOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="openDrawer drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: openDrawer,
            })}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            jaroTracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Home', 'My Issues', 'Discuss', 'Reports'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
            <ListItem button onClick={handleTopListClick}>
                <ListItemIcon>
                    <Inbox />
                </ListItemIcon>
                <ListItemText primary="Your Team" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem> 
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested} onClick={handleNextListClick}>
                        <ListItemIcon>
                            <Mail />
                        </ListItemIcon>
                        <ListItemText primary="Jaroslaw" />
                        {nextListOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={nextListOpen} timeout="auto" unmountOnExit className={classes.nested}>
                    <List>
                        {['Issues',  'Projects'].map((text, index) => {
                           return text === 'Issues'? 
                           (
                            <>
                                <ListItem button onClick={handleLastListClick}>
                                    <ListItemIcon>
                                        <Inbox />
                                    </ListItemIcon>
                                    <ListItemText primary="Issues" />
                                    {lastListOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={lastListOpen} timeout="auto" unmountOnExit className={classes.nested}>
                                <List>
                                    {['BackLog', 'All', 'Board'].map((text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                    ))}
                                </List> 
                                </Collapse>
                            </>
                           ) :
                           (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                        })}
                    </List>
                    </Collapse>
                </List>
            </Collapse>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}
