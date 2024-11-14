import React, { useState } from 'react';
import './messenger-screen.css';
import ConversationList from '../../components/conversation-list/conversation-list';
import Toolbar from '../../components/toolbar/toolbar';
import ToolbarButton from '../../components/toolbar-button/toolbar-button';
import MessageList from '../../components/message-list/message-list';
import { TConversation } from '../../types/conversation';

type MessengerProps = {
    loginData: TConversation;
    conversations: TConversation[] | null;
    setConversations: (loginData: TConversation[] | null) => void;
}

function MessengerScreen({loginData, conversations, setConversations}: MessengerProps): JSX.Element {
  const [currentChat, setCurrentChat] = useState<TConversation[] | null>(null)

  const onChatClick = (conversationTitle: string) => {
    // const chatMessages = conversations?.filter((message) => message.posts.map((post) => post.words.includes(conversationTitle)))
    const chatMessages = conversations?.forEach((conversation) => console.log(conversation.posts.map((post)=> post.words)))
    // if (chatMessages) {
    //   setCurrentChat(chatMessages)
    // } else {
    //   setCurrentChat(null)
    // }

    console.log(conversationTitle);
  }

    return (
      <div className="messenger">
        {/* <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />

        <Toolbar
          title="Conversation Title"
          leftItems={[]}
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        /> */}

        <div className="scrollable sidebar">
          <ConversationList userConversations={loginData} onChatClick={onChatClick}/>
        </div>

        <div className="scrollable content">
          <MessageList />
        </div>
      </div>
    );
}

export default MessengerScreen;