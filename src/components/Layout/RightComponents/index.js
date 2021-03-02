import React from 'react';
import { BiSearch } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { Container, Search, News, Header, Item, Footer } from './styles';

function RightComponents() {
  return (
    <Container>
      <Search>
       <input type="text" placeholder="Buscar no Twitter"/>
       <div>
        <BiSearch />
       </div>
      </Search>
      <News>
        <Header>
          <h1>o que está acontecendo</h1>
        </Header>

        <Item>
          <div>
            <p>Tecnologia</p>
            <div className="iconDots">
              <BsThreeDots />
            </div>
          </div> 
          <h1>Reactjs</h1>
          <p>11.921 Tweets</p>
        </Item>
        <Item>
          <div>
            <p>Tecnologia</p>
            <div className="iconDots">
              <BsThreeDots />
            </div>
          </div> 
          <h1>React Native</h1>
          <p>7.362 Tweets</p>
        </Item>
        <Item>
          <div>
            <p>Tecnologia</p>
            <div className="iconDots">
              <BsThreeDots />
            </div>
          </div> 
          <h1>Javascript</h1>
          <p>5.456 Tweets</p>
        </Item>
        <Item>
          <div>
            <p>Tecnologia</p>
            <div className="iconDots">
              <BsThreeDots />
            </div>
          </div> 
          <h1>Ednaldo Pereira</h1>
          <p>22.253 Tweets</p>
        </Item>
        <Item>
          <div>
            <p>Tecnologia</p>
            <div className="iconDots">
              <BsThreeDots />
            </div>
          </div> 
          <h1>Styled-components</h1>
          <p>1.235 Tweets</p>
        </Item>

        <Footer>
          <p>Mostrar mais</p>
        </Footer>
      </News>
    </Container>
  );
}

export default RightComponents;