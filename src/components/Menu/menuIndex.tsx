import React from 'react';
import { MdDashboard, MdAdd } from 'react-icons/md';

const menuIndex = {
  data: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: <MdDashboard />,
    },
    {
      name: 'Cadastrar horas',
      url: '/cadastrar-horas',
      icon: <MdAdd />,
    },
  ],
  system: [],
};

export default menuIndex;
