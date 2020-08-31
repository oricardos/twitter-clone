import React from 'react';

import { Container,
          Banner,
          Avatar,
          ProfileData,
          NameProfile,
          VerifiedIcon,
          LocationIcon,
          CakeIcon,
          Followage,
          EditButton
        } from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar >
          <img src="https://pbs.twimg.com/profile_images/1150892874499854336/7fYxxBNa_400x400.png" alt="Profile Img"/>
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <NameProfile>
          <h1>Luiz Ricardo Silva</h1>
          <VerifiedIcon />
        </NameProfile>
        <h2>@oricardo_dev</h2>

        <p>Developer at <a href="#">@kdcomunicacao</a></p>

        <ul>
          <li>
            <LocationIcon />
            Belo Horizonte, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 09 de novembro de 1993
          </li>
        </ul>

        <Followage>
          <span>
            <strong>30 </strong>
            Seguindo
          </span>

          <span>
            <strong>1M </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;