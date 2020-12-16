import styled from 'styled-components';

import { Button, FormControl, TextField } from '@material-ui/core';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  form {
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    min-width: 400px;
    min-height: 250px;
    padding: 60px;
    box-shadow: 1px 1px 1px 1px #eee;
    box-shadow: 0px 0px 1px 1px #eee;
  }

  .links {
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    a {
      color: #357623;
      font-weight: bold;

      &:hover {
        color: #74b61b;
      }
    }
  }

  small {
    color: white;
    margin: 10px;
  }
`;

export const StyledFormControl = styled(FormControl)`
  margin: 10px 0 !important;
`;

export const StyledTextField = styled(TextField)`
  margin: 10px 0 !important;
`;

export const StyledButton = styled(Button)`
  background-color: #74b61b !important;
  margin: 10px 0 !important;
  width: 100%;
`;
