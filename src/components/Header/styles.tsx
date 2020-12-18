import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const ImgBrand = styled.img`
  max-height: 40px;
`;

export const BarUser = styled.img`
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 20px;
`;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  typografhItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#292c32',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
