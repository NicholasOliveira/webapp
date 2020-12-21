import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, useStyles, Wrapper, BarUser } from './styles';
import * as DataActions from '../../store/modules/users/actions';
import { createSelectorHook } from '../../interfaces/userInterfaces';
import avatar from '../../assets/avatar.svg';

const Profile = () => {
  const user = useSelector((state: createSelectorHook) => state.users);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [image, setImage] = useState(avatar);
  const [preview, setPreview] = useState('');

  const dispatch = useDispatch();
  const response = useSelector((state: createSelectorHook) => state.users);

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(DataActions.setData({ nome, email, senha }));
    setNome('');
    setEmail('');
    setSenha('');
  }

  function handleAvatar(e: any) {
    console.log(e.target.files[0]);
  }

  const classes = useStyles();
  return (
    <Wrapper>
      <Container>
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          autoComplete="off"
        >
          {response.create &&
            (toast.success('Cadastro efetuado com sucesso!'),
            (<Redirect to="signin" />))}
          <Container>
            <BarUser>
              <input
                type="file"
                onChange={e => handleAvatar(e)}
                name="avatar"
                id="avatar"
              />
              <img src={avatar} />
            </BarUser>
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
            value={senha}
            onChange={e => setSenha(e.target.value)}
            id="standard-basic"
            label="Sua senha atual"
            type="password"
          />

          <TextField
            value={senha}
            onChange={e => setSenha(e.target.value)}
            id="standard-basic"
            label="Nova senha"
            type="password"
          />

          <TextField
            value={senha}
            onChange={e => setSenha(e.target.value)}
            id="standard-basic"
            label="Confirme nova senha"
            type="password"
          />

          <Link to="/signin">
            <Button
              style={{ marginTop: '30px' }}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Atualizar meus dados
            </Button>
          </Link>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Profile;
