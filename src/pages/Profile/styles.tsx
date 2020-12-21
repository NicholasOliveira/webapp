import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  max-width: 600px;
`;

export const BarUser = styled.label`
  img {
    border-radius: 50%;
    margin: 0 20px;
    width: 110px;
    height: 110px;
    background-color: #ccc;
    background-image: url(${(props: any) => props.data});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  cursor: pointer;
  input {
    display: none;
  }
  :hover {
    opacity: 0.7;
  }
`;

export const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  img: {
    maxWidth: '100px',
  },
  button: {
    width: '100%',
  },
}));
