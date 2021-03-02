import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 10px 40px;
`;

export const Search = styled.div`
  position: relative;
  
  div {
    color: var(--gray);
    top: 13px;
    left: 16px;
    font-size: 20px;
    position: absolute;
  }

  input {
    padding: 12px 45px 13px 45px;
    border-radius: 50px;
    font-size: 1rem;
    border: none;
    outline: none; 
    background-color: #202327;
    border: 1px solid #202327;
    color: var(--gray);

    &::placeholder {
      opacity: 1;
    }

    &:focus {
      border: 1px solid var(--blue);
      color: var(--white);
      background-color: transparent;
    
      + div {
        color: var(--blue);
      }
    }
  }
`;

export const News = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const Header = styled.div`
  padding: 14px 20px;
  background-color: #15181c;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom: 1px solid var(--darkgray);

  h1 {
    color: var(--white);
    font-size: 1.4rem;
  }
`;

export const Footer = styled.div`
  padding: 14px 20px;
  background-color: #15181c;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    background-color: #1a1d21;
  }

  p {
    color: var(--blue);
  }
`;

export const Item = styled.div`
  background-color: #15181c;
  padding: 15px 20px;
  border-bottom: 1px solid var(--darkgray);
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    background-color: #1a1d21;
  }

  div {
    position: relative;
    display: flex;
    p {
      color: var(--gray);
      font-size: 0.8rem;
      font-weight: 100;
      margin-right: auto;
    }
    .iconDots {
      position: absolute;
      top: -8px;
      right: -8px;
      
      height: 30px;
      width: 30px;
      
      display: flex;
      align-items: center;
      justify-content: center;
      
      font-size: 16px;
      color: var(--gray);
      border-radius: 50%;
      transition: all 300ms ease;

      &:hover {
        background-color: rgba(29, 161, 242, 0.1);
        color: var(--blue);
      }
    }
  }
  h1 {
    color: var(--white);
    line-height: 32px;
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
    color: var(--gray);
  }
`;
