import React from 'react';
import clsx from 'clsx';
import {
    Badge,
    Toolbar, 
    AppBar, 
    Typography, 
    IconButton,
} from '@material-ui/core';
import {
    Notifications,
    AccountCircle,
    Menu,  
    Search,
    Create,
    Settings
  } from '@material-ui/icons';

  const menuId = 'primary-search-account-menu';

const Header = ({handleDrawerOpen, classes, openDrawer}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    };
    
    return (
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
          <Typography variant="h6" noWrap style={{color:"#2684FF"}}>
            jaro <span style={{fontWeight: 'bold'}}>Tracker</span>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="">
              <Create/>
            </IconButton>
            <IconButton color="">
              <Search/>
            </IconButton>
            <IconButton color="">
              <Settings/>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="">
              <Badge badgeContent={17} color="secondary">
                <Notifications/>
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color=""
            >
              <AccountCircle/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
}

export default Header
