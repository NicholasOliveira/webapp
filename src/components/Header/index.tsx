import React, { useEffect } from 'react';
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Menu as MenuIcon, ExitToApp } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import * as DataActions from '../../store/modules/users/actions';
import { useStyles, BarUser } from './styles';

const Header = ({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: any;
  setMobileOpen: any;
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    dispatch(DataActions.setUserConfig(mobileOpen));
  }, [mobileOpen]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

          <Typography variant="h6" className={classes.typografhItem} noWrap>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <BarUser />
            </Button>
          </Typography>
        </Toolbar>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link className={classes.linkMenu} to="/profile">
            <MenuItem>Meu perfil</MenuItem>
          </Link>
          <MenuItem onClick={handleExitApp}>
            Sair <ExitToApp style={{ marginLeft: '7px' }} />
          </MenuItem>
        </Menu>
      </AppBar>
    </div>
  );
};

export default Header;
