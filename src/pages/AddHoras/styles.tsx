import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      width: '100%',
    },
  },
  img: {
    maxWidth: '100px',
  },
  button: {
    width: '100%',
    maxWidth: '300px',
    margin: '20px 0px',
  },
  svg: {
    marginLeft: '10px',
  },
}));

export const Wrapper = styled.div`
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  padding: 50px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
