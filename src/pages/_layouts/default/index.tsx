import React from 'react';

import { Wrapper, Container } from './styles';

import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';

export default function DefaultLayout({ children }: any) {
  return (
    <Wrapper>
      <Menu />
      <Container>
        {children}
        <Footer />
      </Container>
    </Wrapper>
  );
}
