import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${props => props.outlined ? 'transparent' : 'var(--twitter)'};
  color: ${props => props.outlined ? 'var(--twitter)' : 'var(--white)'};
  border: ${props => props.outlined ? '1px solid var(--twitter)' : 'none'};
  
  @media (min-width: 1280px) {
    padding: 16px;
  }
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;
  transition: background .3s;

  &:hover {
    background: 
      ${props => props.outlined 
      ? 'var(--twitter-dark-hover)' 
      : 'var(--twitter-light-hover)' 
    };
  }
`;