import styled, { css } from 'styled-components';
import { AiOutlineHeart, AiOutlineRetweet} from 'react-icons/ai'
import { RiChat1Line } from 'react-icons/ri'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { FiShare } from 'react-icons/fi'

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #2f3336;
  padding:  15px 20px;
  display: flex;
  flex-direction: column
`;

const iconPre = css`
  color: var(--gray);
  height: 30px;
  width: 30px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 16px;
  border-radius: 50%;
  padding: 5px;
  transition: all 300ms ease;

  cursor: pointer;
`;

export const TwComment = styled(RiChat1Line)`
  ${iconPre}

  &:hover {
    color: #1da1f2;
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

export const TwShare = styled(FiShare)`
  ${iconPre}

  &:hover {
    color: #1da1f2;
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

export const TwRetweet = styled(AiOutlineRetweet)`
  ${iconPre}

  &:hover {
    color: #06e077;
    background-color: rgba(6, 224, 119, 0.1);
  }
`;

export const TwHeart = styled(AiOutlineHeart)`
  ${iconPre}

  &:hover {
    color: #de2b37;
    background-color: rgba(222, 43, 55, 0.1);
  }
`;

export const Dots = styled(BiDotsHorizontalRounded)`
  color: var(--gray);
  margin-left: auto;
  font-size: 1.2rem;
`;

export const Profile = styled.div`
  margin-right: 15px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`;

export const RightComponents = styled.div`  
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`  
  width: 100%;
  color: var(--white);
  margin-top: 6px;
`;

export const Texts = styled.div`  
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;

  h1 {
    color: var(--white);
    font-size: 1rem;
    margin-right: 5px;
  }

  p {
    color: var(--gray);
    font-size: 1rem;
  }
`;

export const IconsSection = styled.div`
  margin-top: 10px;

  .icon {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;

export const Line0ne = styled.div`

`;