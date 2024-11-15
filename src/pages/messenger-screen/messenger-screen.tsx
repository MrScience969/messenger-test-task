import React, { useState } from 'react';
import './messenger-screen.css';
import ConversationList from '../../components/conversation-list/conversation-list';
import MessageList from '../../components/message-list/message-list';
import { TConversation } from '../../types/conversation';
import { CONVERSATIONS } from '../../mocks/conversations';

type MessengerProps = {
    loginData: TConversation;
    conversations: TConversation[] | null;
    setConversations: (loginData: TConversation[] | null) => void;
}

function MessengerScreen({loginData, conversations, setConversations}: MessengerProps): JSX.Element {
  const [currentChat, setCurrentChat] = useState<string>('')
  const [currentMessages, setCurrentMessages] = useState<TConversation[] | null>(null)

  const onChatClick = (conversationTitle: string) => {
    const chatMessages = CONVERSATIONS.slice().filter((message) => (message.posts.map((post) => post.words.includes(conversationTitle))).includes(true))
    setCurrentMessages(chatMessages)
    setCurrentChat(conversationTitle);
  }

    return (
      <div className="messenger">

        <div className="scrollable sidebar">
          <ConversationList userConversations={loginData} onChatClick={onChatClick}/>
        </div>

        <div className="scrollable content">
          {currentChat && <MessageList currentChat={currentChat} currentMessages={currentMessages}/>}
        </div>
      </div>
    );
}

export default MessengerScreen;