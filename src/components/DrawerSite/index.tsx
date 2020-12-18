import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ListItemText,
  Collapse,
  Divider,
  Drawer,
  ListItem,
  List,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useStyles } from './styles';

const MenuBar = ({
  menuItems,
  mobileOpen,
}: {
  menuItems: any;
  mobileOpen: any;
}) => {
  const classes = useStyles();
  const [handleValue, sethandleValue] = useState<any>({});

  const handleClick = (item: any) => {
    sethandleValue({ [item]: !handleValue[item] });
  };

  const handler = (children: any) => {
    return children.map((subOption: any) => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem button key={subOption.name}>
              <Link className={classes.link} to={subOption.url}>
                {subOption.icon}
                <ListItemText
                  className={classes.textLink}
                  inset
                  primary={subOption.name}
                />
              </Link>
            </ListItem>
          </div>
        );
      }

      return (
        <div key={subOption.name}>
          <ListItem button onClick={() => handleClick(subOption.name)}>
            <ListItemText inset primary={subOption.name} />
            {handleValue[subOption.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={handleValue[subOption.name]}
            timeout="auto"
            unmountOnExit
          >
            {handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  };

  return (
    <div style={{ display: !mobileOpen ? 'none' : 'block' }}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={mobileOpen}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <List>
            <ListItem key="menuHeading" divider disableGutters>
              <ListItemText inset primary="Menu principal" />
            </ListItem>
            {handler(menuItems.data)}
            <Divider />
            {handler(menuItems.system)}
          </List>
        </div>
      </Drawer>
    </div>
  );
};
export default MenuBar;
