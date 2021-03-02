import React from 'react';
import { Container, Item, Items, Profile } from './styles';
import { TiHome } from 'react-icons/ti'
import { RiNotification2Line, RiFileList2Line } from 'react-icons/ri'
import { BiEnvelope, BiBookmark } from 'react-icons/bi'
import { BsPerson, BsThreeDots } from 'react-icons/bs'
import { HiOutlineDotsCircleHorizontal, HiOutlineHashtag } from 'react-icons/hi'
import { FaTwitter } from 'react-icons/fa'

const LeftComponents = () => {
  return (
    <Container>
      <div className="iconTw">
        <FaTwitter />
      </div>
      <Items>
        <Item>
          <div className="icon">
            <TiHome />
          </div>
          <h1>Página Inicial</h1>
        </Item>
        <Item>
          <div className="icon">
            <HiOutlineHashtag/>
          </div>
          <h1>Explorar</h1>
        </Item>
        <Item>
          <div className="icon">
            <RiNotification2Line />
          </div>
          <h1>Notificações</h1>
        </Item>
        <Item>
          <div className="icon">
            <BiEnvelope />
          </div>
          <h1>Mensagens</h1>
        </Item>
        <Item>
          <div className="icon">
            <BiBookmark />
          </div>
          <h1>Itens Salvos</h1>
        </Item>
        <Item>
          <div className="icon">
            <RiFileList2Line />
          </div>
          <h1>Listas</h1>
        </Item>
        <Item>
          <div className="icon">
            <BsPerson />
          </div>
          <h1>Perfil</h1>
        </Item>
        <Item>
          <div className="icon">
            <HiOutlineDotsCircleHorizontal />
          </div>
          <h1>Mais</h1>
        </Item>
      </Items>
      <div className="button">
        <button>Tweetar</button>
      </div>
      <Profile>
        <div className="contentProfile">
          <img src="https://pbs.twimg.com/profile_images/1366383034119946240/H_a_dbyl_400x400.jpg" alt="profile"/>
          <div className="texts">
            <h1>nogs;</h1>
            <h3>@wynogs</h3>
          </div>
          <div className="iconDots">
            <BsThreeDots />
          </div>
        </div>
      </Profile>
    </Container>
  );
}

export default LeftComponents;