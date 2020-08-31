import React from 'react';

import { Container, 
          Retweeted,
          Body, 
          Avatar, 
          Content,
          Header,
          Description, 
          Dot,
          Icons,
          Status,
          // CommentIcon,
          // RetweetIcon,
          // LikeIcon,
          // ShareIcon

        } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>30 de ago</time>
          </Header>

          <Description>
            Visual Studio Code is a free, powerful code editor for developers building any app, using any coding language, on any platform… that you can make yours with 20,000+ extensions! Tecnóloga
          </Description>

          <img src="https://pbs.twimg.com/media/EgScFQLUcAACQbG?format=jpg&name=small" alt="Visual Studio Code" />

          <Icons>
            <Status>
              <CommentIcon />
              180
            </Status>

            <Status>
              <RetweetIcon />
              354
            </Status>

            <Status>
              <LikeIcon  />
              953
            </Status>
            
            <Status>
              <ShareIcon  />
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
