import React, { useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);
import './message-list.css';
import ToolbarButton from '../toolbar-button/toolbar-button';
import Toolbar from '../toolbar/toolbar';
import Compose from '../compose/compose';
import Message from '../message/message';
import { TConversation } from '../../types/conversation';

type MessengerProps = {
  currentMessages: TConversation[];
  currentChat: string;
  conversations: TConversation[]; 
  setConversations: (loginData: TConversation[]) => void;
  loginData: TConversation;
}

function MessageList({currentChat, currentMessages, conversations, setConversations, loginData}: MessengerProps): JSX.Element {
    const [newMessage, setNewMessage] = useState<string>('')

    const onSendNewMessage = () => {
      
      const newMessageData: TConversation = Object.assign(loginData);
      newMessageData.posts.push({
        "words": [currentChat],
        "sentence": newMessage,
        "sentences": "",
        "paragraph": ""
      })
      
      setConversations([...conversations, newMessageData])
      setNewMessage('');

      console.log(loginData);
      console.log(newMessageData);

    }

    return(
      <div className="message-list">
        <Toolbar
          leftItems={[]}
          title={currentChat}
          rightItems={[
            <ToolbarButton key="chat-settings" toolbarName={'chat-settings'} toolbarImg={'/src/assets/sliders.svg'} />,
          ]}
        />

        <div className="message-list-container">{currentMessages && 
        currentMessages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isMine={loginData.email === message.email}
          />
        )
        )}
      </div>

        <Compose
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          rightItems={[
            <ToolbarButton
              key="send-message"
              toolbarName={'send-message'} 
              toolbarImg={'/src/assets/send.svg'}
              onClick={onSendNewMessage}
            />,
          ]}
        />
      </div>
    );
}

export default MessageList;