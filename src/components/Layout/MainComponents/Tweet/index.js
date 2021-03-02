import React from 'react';
import { Container, Texts, Line0ne, Content, TwShare, TwComment, TwRetweet, TwHeart, Dots, Profile, RightComponents, IconsSection } from './styles';

function Tweet(props) {

  const ConsId = id => {
    console.log(id)
  }

  return (
    <Container name={props.id} onClick={(e) => ConsId(e)}>
      <Line0ne>
        <Profile>
          <img src="https://pbs.twimg.com/profile_images/1366383034119946240/H_a_dbyl_400x400.jpg" alt="profile"/>
        </Profile>
        <RightComponents>
          <Texts>
            <h1>nogs;</h1>
            <p>@wynogs</p>
            <Dots />
          </Texts>
          <Content>
            {props.text}
          </Content>
        </RightComponents>
      </Line0ne>

      <IconsSection>
        <div className="icon">
          <TwComment/>
        </div>
        <div className="icon">
          <TwRetweet/>
        </div>  
        <div className="icon">
          <TwShare/>
        </div>
        <div className="icon">
          <TwHeart/>
        </div>
      </IconsSection>
    </Container>
  );
}

export default Tweet;