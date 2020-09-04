import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
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
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Bill Gates"
                nickname="@BillGates"
              />,

              <FollowSuggestion
                name="IBM Brasil"
                nickname="@ibmbrasil"
              />,

              <FollowSuggestion
                name="Rocketseat"
                nickname="@rocketseat"
              />,

              <FollowSuggestion
                name="Apple"
                nickname="@apple"
              />,

              <FollowSuggestion
                name="Microsoft Brasil"
                nickname="@MicrosoftBr"
              />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
          
          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>

    </Container>
  );
};

export default SideBar;
