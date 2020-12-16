import React from 'react';
import { useSelector } from 'react-redux';
import ListData from './Listdata';
import { Container } from './styles';
import { createSelectorHook } from '../../interfaces/datetimeInteraces';
import { createSelectorHook as createSelectorHook2 } from '../../interfaces/userInterfaces';

const Dashboard = (statemenu: any) => {
  const Data = useSelector((state: createSelectorHook) => state.datetime);
  console.log(statemenu.statemenu);
  return (
    <Container
      style={
        statemenu.statemenu !== true && statemenu.statemenu !== undefined
          ? { marginLeft: '0' }
          : { marginLeft: '240px' }
      }
    >
      <ListData Data={Data} />
    </Container>
  );
};

export default Dashboard;
