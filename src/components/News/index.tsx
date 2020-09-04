import React from 'react';

import { Container, Header, ChevronIcon } from './styles';

const News: React.FC = () => {
  return (
    <Container>
      <Header>
        <span>Assuntos do momento em Brasil</span>
        <ChevronIcon />
      </Header>

      <strong>Bootcamp da Rocketseat </strong>
    </Container>
  );
};

export default News;
