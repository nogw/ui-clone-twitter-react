
import React, { useRef, useState, useContext } from 'react';
import { Container, Header, WriteTweet, Write, Icons, RightComponents, IconsSection, Profile, Texts, Button, IconImage,IconGif,IconPoll,IconEmoji,IconTask } from './styles';
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'
import { Context } from '../../../Store'
import Tweets from './Tweets'

const MainComponents = () => {
  const [tweetLength, setTweetLength] = useState(255);
  const [tweetValue, setTweetValue] = useState(255);
  const [tweetText, setTweetText] = useContext(Context)
  const TextArea = useRef();
  
  const autoResize = e => {
    TextArea.current.style.height = `auto`;
    TextArea.current.style.height = `${TextArea.current.scrollHeight}px`;
    setTweetLength(255 - e.target.value.length);
    setTweetValue(e.target.value)
  }

  const makeTweet = async () => {
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    
    if (tweetValue.length > 0) {
      const id = nanoid(6)
      const now = `${mS[dayjs().month()]} ${dayjs().date()}, ${dayjs().year()} ${dayjs().hour()}:${dayjs().minute()} ${dayjs().hour() < 12 ? 'am' : 'pm'}`
      await setTweetText(tweetText => [...tweetText, {content: tweetValue, date: now, id: id}])
      TextArea.current.value = ""
      setTweetLength(255);
      setTweetValue('')
    }
  }

  return (
    <Container>
      <Header>
        <h1>Página Inicial</h1>
      </Header>
      <WriteTweet>
          <Profile>
            <img src="https://pbs.twimg.com/profile_images/1366383034119946240/H_a_dbyl_400x400.jpg" alt="profile"/>
          </Profile>
          <RightComponents>
              <textarea 
                ref={TextArea}
                placeholder="O que está acontecendo?" 
                spellCheck="false"
                maxLength="255"
                onChange={e => autoResize(e)} 
              />
            <IconsSection>
              <Icons>
                <IconImage/>
                <IconGif/>
                <IconPoll/>
                <IconEmoji/>
                <IconTask/>
              </Icons>
              <Button onClick={() => makeTweet()}>Tweetar</Button>
            </IconsSection>
          </RightComponents>
      </WriteTweet>
      <div className="divisor" />
      <Tweets />
    </Container>
  );
}

export default MainComponents;