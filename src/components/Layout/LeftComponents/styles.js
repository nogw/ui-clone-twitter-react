import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  .iconTw {
    color: var(--white);
    font-size: 1.8rem;
    padding: 6px 10px 0px 10px;
    margin: 20px auto 0px 0px;
  }

  .button {
    width: 110%;
    margin-right: auto;

    button {
      background-color: var(--blue);
      width: 110%;
      border: none;
      outline: none;
      margin-top: 10px;
      padding: 14px 20px 16px 20px;
      border-radius: 50px;
      font-weight: bold;
      font-size: 0.85rem;
      color: #fff;
      transition: all 300ms ease;
      cursor: pointer;

      &:hover {
        filter: brightness(0.9)
      }
    }
  }
`;

export const Items = styled.div`

`;

export const Profile = styled.div`
  width: 100%;
  margin: auto 0 20px;

  .contentProfile {
    display: flex;
    align-items: center;
    width: 120%;

    .iconDots {
      height: 20px;
      width: 20px;
      margin: auto 0 auto auto;
      display: flex;
      color: var(--gray);
      align-items: center;
      justify-content: center;
    }

    img {
      height: 40px;
      width: 40px;
      margin-right: 10px;
      border-radius: 50%;
    }

    .texts {
      h1 { 
        color: var(--white);
        font-size: 0.9rem;
      }

      h3 {
        color: var(--gray);
        font-weight: 400;
        font-size: 0.9rem;
      }
    }
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px 2px 10px;
  cursor: pointer;
  transition: all 300ms ease;
  border-radius: 50px;

  .icon {
    transition: all 300ms ease;
    color: var(--white);
    font-size: 1.7rem;
    margin: 4px 15px 0px 0px;
  }

  h1 {
    transition: all 300ms ease;
    font-size: 1.2rem;
    color: #fff;
  }

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);

    .icon {
      color: var(--blue);
    }

    h1 {
      color: var(--blue);
    }
  }
`;
