import React from 'react';
import clsx from 'clsx';
import {
    Collapse, 
    List, 
    Drawer, 
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
    Inbox,
    Group,
    Mail,
    Home,
    BugReport,
    Forum,
    Description
  } from '@material-ui/icons';

const sideBarItems = [
  {
    name: 'Home',
    icon: <Home/>
  },
  {
    name: 'My Issues',
    icon: <BugReport/>
  },
  {
    name: 'Discuss',
    icon: <Forum/>
  },
  {
    name: 'Reports',
    icon: <Description/>
  }
]


const Sidebar = ({handleDrawerClose, classes, openDrawer, theme}) => {
    const [open, setOpen] = React.useState(false);
    const [nextListOpen, setNextListOpen] = React.useState(false);
    const [lastListOpen, setLastListOpen] = React.useState(false);

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
        <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer,
        })}
        classes={{
          paper: clsx(classes.MuiDrawer, {
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight style={{color: "#fff"}}/> : <ChevronLeft style={{color: "#fff"}}/>}
          </IconButton>
        </div>
        <Divider />
        <List>
          {sideBarItems.map((item, index) => (
            <ListItem button key={item.name}>
              <ListItemIcon  style={{color: "#fff"}}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} style={{color: "#fff"}} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
            <ListItem button onClick={handleTopListClick}>
                <ListItemIcon style={{color: "#fff"}}>
                    <Group/>
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
    )
}

export default Sidebar
