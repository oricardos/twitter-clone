import React from 'react';

import Button from '../Button';

import { Container,
        Topside,
        Logo,
        MenuButton,
        HomeIcon,
        BellIcon,
        EmailIcon,
        FavoriteIcon,
        ProfileIcon,
        NewTweet,
        ExitIcon,
        Botside,
        Avatar,
        ProfileData
       } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon className="active" />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <NewTweet />
          <span> Tweetar </span>
        </Button>

      </Topside>

      <Botside>
      <Avatar >
          <img src="https://pbs.twimg.com/profile_images/1150892874499854336/7fYxxBNa_400x400.png" alt="Profile Img"/>
        </Avatar>

        <ProfileData>
          <strong>Ricardo Silva</strong>
          <span>@oricardo_dev</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
