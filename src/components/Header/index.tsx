import React, { useEffect } from 'react';
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { Menu as MenuIcon, ExitToApp } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';
import * as DataActions from '../../store/modules/users/actions';

const Header = ({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: any;
  setMobileOpen: any;
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DataActions.setUserConfig(mobileOpen));
  }, [mobileOpen]);

  function handleHeaderToggle() {
    mobileOpen ? setMobileOpen(false) : setMobileOpen(true);
  }

  function handleExitApp() {
    dispatch(DataActions.exitUser());
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="Open header"
            edge="start"
            onClick={handleHeaderToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            <IconButton
              color="inherit"
              aria-label="Logout"
              edge="start"
              onClick={handleExitApp}
              className={classes.menuButton}
            >
              <ExitToApp />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
