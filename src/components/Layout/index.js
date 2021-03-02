import React from 'react';
import LeftComponents from './LeftComponents';
import MainComponents from './MainComponents';
import RightComponents from './RightComponents';

import { Container, LeftColumn, MidColumn, RightColumn } from './styles';

const Layout = () => {
  return (
    <Container>
      <LeftColumn>
        <LeftComponents />
      </LeftColumn>
      <MidColumn>
        <MainComponents />
      </MidColumn>
      <RightColumn>
        <RightComponents />
      </RightColumn>
    </Container>
  );
}

export default Layout;