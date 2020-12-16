import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Check } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Container, useStyles } from './styles';
import * as DataActions from '../../store/modules/datetime/actions';
import { createSelectorHook } from '../../interfaces/datetimeInteraces';
import DataPicker from './datapicker';

const AddHoras = () => {
  const [entrada, setEntrada] = useState<Date | number>(new Date().getTime());
  const [almoco, setAlmoco] = useState<Date | number>(new Date().getTime());
  const [saida, setSaida] = useState<Date | number>(new Date().getTime());

  const handleEntrada = (date: Date | number) => {
    setEntrada(new Date(date).getTime());
  };
  const handleAlmoco = (date: Date | number) => {
    setAlmoco(new Date(date).getTime());
  };
  const handleSaida = (date: Date | number) => {
    setSaida(new Date(date).getTime());
  };
  const dispatch = useDispatch();
  const response = useSelector((state: createSelectorHook) => state.datetime);
  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(
      DataActions.DataTimeNew({
        id: response.length + 1,
        date: Date.now(),
        entrada,
        almoco,
        saida,
      })
    );
    setEntrada(new Date().getTime());
    setAlmoco(new Date().getTime());
    setSaida(new Date().getTime());
  }

  const classes = useStyles();
  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <DataPicker
          data={{
            entrada,
            almoco,
            saida,
            handleEntrada,
            handleAlmoco,
            handleSaida,
          }}
        />

        <Button
          variant="contained"
          type="submit"
          color="secondary"
          className={classes.button}
        >
          Cadastrar horas <Check className={classes.svg} />
        </Button>
      </form>
    </Container>
  );
};

export default AddHoras;
