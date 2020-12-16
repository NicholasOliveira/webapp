import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, useStyles } from './styles';
import logoFirefox from '../../assets/logoFirefox.png';
import * as DataActions from '../../store/modules/users/actions';
import { createSelectorHook } from '../../interfaces/userInterfaces';

const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const dispatch = useDispatch();

  const response = useSelector((state: createSelectorHook) => state.users);

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(DataActions.validateUser({ email, senha }));
    setEmail('');
    setSenha('');
  }

  return (
    <form
      onSubmit={e => handleSubmit(e)}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      {response.logged === true && <Redirect to="dashboard" />}
      <Container>
        <img className={classes.img} alt="logo" src={logoFirefox} />
      </Container>
      <TextField
        required={true}
        value={email}
        onChange={e => setEmail(e.target.value)}
        id="standard-basic"
        label="Seu melhor e-mail"
        type="email"
      />
      <TextField
        required={true}
        value={senha}
        onChange={e => setSenha(e.target.value)}
        id="standard-basic"
        label="Sua senha"
        type="password"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Efetuar login <ArrowForwardIosIcon />
      </Button>

      <Link to="/signup">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Realizar cadastro
        </Button>
      </Link>
    </form>
  );
};

export default SignIn;
