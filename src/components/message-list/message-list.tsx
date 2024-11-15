import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);
import './message-list.css';
import ToolbarButton from '../toolbar-button/toolbar-button';
import Toolbar from '../toolbar/toolbar';
import Compose from '../compose/compose';
import { TMessage } from '../../types/messages';
import Message from '../message/message';
import { TConversation } from '../../types/conversation';

const MY_USER_ID = 'apple';

type MessengerProps = {
  currentMessages: TConversation[] | null;
  currentChat: string;
}

function MessageList({currentChat, currentMessages}: MessengerProps): JSX.Element {

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
            isMine={true}
          />
        ))}
      </div>

        <Compose rightItems={[
          <ToolbarButton key="send-message" toolbarName={'send-message'} toolbarImg={'/src/assets/send.svg'}/>,
        ]}/>
      </div>
    );
}

export default MessageList;