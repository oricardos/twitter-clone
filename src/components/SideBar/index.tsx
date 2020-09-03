import React from 'react';

import { Container, 
        SearchWrapper, 
        SearchInput, 
        SearchIcon, 
        Body
      } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, magni quia eligendi iste soluta itaque quis, unde doloribus iure cumque nisi ex, aut optio cupiditate quaerat minima eveniet nesciunt dolorum!</p>
      </Body>
    </Container>
  );
};

export default SideBar;
