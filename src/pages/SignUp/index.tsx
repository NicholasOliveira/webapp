import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import logoFirefox from '../../assets/logoFirefox.png';
import { Container, useStyles } from './styles';
import * as DataActions from '../../store/modules/users/actions';
import { createSelectorHook } from '../../interfaces/userInterfaces';

const SignUp = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const dispatch = useDispatch();
  const response = useSelector((state: createSelectorHook) => state.users);

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(DataActions.setData({ nome, email, senha }));
    setNome('');
    setEmail('');
    setSenha('');
  }

  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
      {response.create &&
        (toast.success('Cadastro efetuado com sucesso!'),
        (<Redirect to="signin" />))}
      <Container>
        <img className={classes.img} alt="logo" src={logoFirefox} />
      </Container>
      <TextField
        required
        value={nome}
        onChange={e => setNome(e.target.value)}
        id="standard-basic"
        label="Nome completo"
        type="text"
      />
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
        variant="contained"
        type="submit"
        color="secondary"
        className={classes.button}
      >
        Confirmar cadastro <ArrowForwardIosIcon />
      </Button>

      <Link to="/signin">
        <Button variant="contained" color="primary" className={classes.button}>
          Já tenho conta
        </Button>
      </Link>
    </form>
  );
};

export default SignUp;
