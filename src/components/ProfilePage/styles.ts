import styled, { css } from "styled-components";

import { LocationOn, Cake, } from '../../styles/Icons';

export const Container = styled.div`

`;

export const Banner = styled.div`

`;

export const Avatar = styled.div`

`;

export const ProfileData = styled.div`

`;

const iconsCss = css`
  width: 20px;
  height: 20px;
  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconsCss}
`;

export const CakeIcon = styled(Cake)`
  ${iconsCss}
`;

export const Followage = styled.div`

`;
