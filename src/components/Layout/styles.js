import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 320px 600px 420px;
  height: 100%;
`;

export const LeftColumn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-right: 1px solid var(--darkgray);
`;

export const MidColumn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-left: 1px solid var(--darkgray);
`;
