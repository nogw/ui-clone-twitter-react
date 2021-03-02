import styled, { css } from 'styled-components';
import { IoImageOutline } from 'react-icons/io5'
import { MdDateRange } from 'react-icons/md'
import { BiPoll } from 'react-icons/bi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { AiOutlineGif } from 'react-icons/ai'

export const Container = styled.div`
  width: 100%;

  div {
    display: flex;
  }

  .divisor {
    height: 12px;
    width: 100%;
    border-bottom: 1px solid var(--darkgray);
    border-top: 1px solid var(--darkgray);
    background-color: #15181c;
  }
`;

export const Header = styled.div`
  padding: 15px 18px;
  border-bottom: 1px solid var(--darkgray);

  h1 {
    color: var(--white);
    font-size: 1.2rem;
  }
`;

export const WriteTweet = styled.div`
  display: flex;
  padding:  15px 20px;
`;

export const Profile = styled.div`
  margin-right: 15px;

  img {
     height: 50px;
     width: 50px;
     border-radius: 50%;
  }
`;

export const Texts = styled.div`

`;

export const IconsSection = styled.div`
`;

export const RightComponents = styled.div`
  display: flex;
  flex-direction: column;
  
  textarea {
    margin-left: auto;
    min-width: calc(600px - 90px);
    margin-bottom: 15px;
    margin-top: 10px;
    resize: none;
    color: #fff;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    overflow: hidden;
    font-family: Helvetica;


    &::placeholder {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const Button = styled.div`
  outline: none;
  border: none;
  color: #fff;
  width: 100px;
  text-align: center;
  padding: 10px 20px 8px 20px;
  border-radius: 20px;
  background-color: #1da1f2;
  transition: filter 300ms ease;
  cursor: pointer;
  &:hover {
    filter: brightness(1.15)
  }
`;

const iconEf = css`
  color: #1da1f2;
  height: 35px;
  width: 35px;
  padding: 5px;
  border-radius: 50%;
  font-size: 25px;
  margin-right: 8px;
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

export const IconImage  = styled(IoImageOutline)`
  ${iconEf}
`;

export const IconGif  = styled(AiOutlineGif)`
  ${iconEf}
`;

export const IconPoll  = styled(BiPoll)`
  ${iconEf}
`;

export const IconEmoji  = styled(HiOutlineEmojiHappy)`
  ${iconEf}
`;

export const IconTask  = styled(MdDateRange)`
  ${iconEf}
`;