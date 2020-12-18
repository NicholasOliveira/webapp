import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const drawerWidth = 240;

export const ImgBrand = styled.img`
  max-height: 40px;
`;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textLink: {
    paddingLeft: '20px',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop: '60px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));
