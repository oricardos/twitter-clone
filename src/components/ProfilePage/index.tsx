import React from 'react';

import { Container,
          Banner,
          Avatar,
          ProfileData,
          LocationIcon,
          CakeIcon,
          Followage
        } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar Perfil</EditButton> */}

        <h1>Luiz Ricardo Silva</h1>
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
            Seguindo
            <strong>30</strong>
          </span>

          <span>
            <strong>1M </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;