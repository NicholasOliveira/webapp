import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, useStyles } from './styles';
import logoFirefox from '../../assets/logoFirefox.png';
import * as DataActions from '../../store/modules/users/actions';
import { createSelectorHook } from '../../interfaces/userInterfaces';
import loadImg from '../../assets/loading.gif';

const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const dispatch = useDispatch();

  const response = useSelector((state: createSelectorHook) => state.users);
  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(DataActions.validateUserRequest({ email, senha }));
  }
  return (
    <form
      onSubmit={e => handleSubmit(e)}
      className={classes.root}
      autoComplete="off"
    >
      {response.logged === true && <Redirect to="dashboard" />}
      <Container>
        <img className={classes.img} alt="logo" src={logoFirefox} />
      </Container>
      <TextField
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        id="standard-basic"
        label="Seu melhor e-mail"
        type="email"
      />
      <TextField
        required
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
        Efetuar login{' '}
        {response.load ? (
          <img style={{ width: 25, marginLeft: 10 }} src={loadImg} />
        ) : (
          <ArrowForwardIosIcon />
        )}
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
