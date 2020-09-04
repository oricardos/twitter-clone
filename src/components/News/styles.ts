import styled from 'styled-components';
import { ChevronDown } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 15px;

  > span {
    color: var(--gray);
    margin-bottom: 3px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChevronIcon = styled(ChevronDown)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transition: background .3s, path .3s;

  > path {
    fill: var(--gray);
  }

  &:hover {
    cursor: pointer;
    background: var(--twitter-dark-hover);
    border-radius: 50%;
    
    > path {
    fill: var(--twitter);
  }
  }
`;
