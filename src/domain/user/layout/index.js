import React, {useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import {CssBaseline, Typography} from '@material-ui/core';


import Sidebar from './Sidebar';
import Header from './Header';
import useStyles from './LayoutStyle';
import Modal from '../../../components/modals/Modal';
import SearchModal from '../../../components/modals/SearchModal';


export default function MiniDrawer({children}) {
  const classes = useStyles();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(true);
 
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  const toggleModal = () => {
    setOpen(!open);
  };
  const toggleSearchModal = () => {
    setOpenSearch(!openSearch);
  };
 
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header 
        handleDrawerOpen={handleDrawerOpen}
        classes={classes}
        openDrawer={openDrawer}
        toggleSearch={toggleSearchModal}
        toggleModal={toggleModal}
        />

      <Sidebar 
        handleDrawerClose={handleDrawerClose}
        classes={classes}
        openDrawer={openDrawer}
        theme={theme}
      />
      <Modal
        open={open}
        handleClose={handleClose}
      />
      <SearchModal
        open={openSearch}
        handleClose={handleCloseSearch}
      />
     <main className={classes.content}>
        <div className={classes.toolbar} />
         {children}
      </main>
    </div>
  );
}
