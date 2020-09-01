import styled, { css } from 'styled-components';

import { Home, 
        Notifications, 
        Email, 
        FavoriteBorder, 
        Person,
        ExitToApp,
        Twitter,
        ReactLogo
      } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;

    }
      padding: 12px 17px 12px 6px;
      transition: background .3s;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 10.5px;
  }

  & + button:last-child {
    margin-top: 33px;

    width:40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover, &.active {
    span, svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconCss = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;

  color: var(--white);
`;

export const Logo = styled(Twitter)`
  padding: 5px;
  border-radius: 50%;
  width: 51px;
  height: 51px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;
  transition: background-color .3s;

  &:hover {
    background-color: #051018;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const NewTweet = styled(ReactLogo)`
  display: inline;
  ${iconCss};

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCss}
`;

export const BellIcon = styled(Notifications)`
  ${iconCss}
`;

export const EmailIcon = styled(Email)`
  ${iconCss}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCss}
`;

export const ProfileIcon = styled(Person)`
  ${iconCss}
`;

