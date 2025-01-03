import React from 'react';
import './conversation-list.css';
import ToolbarButton from '../toolbar-button/toolbar-button';
import Toolbar from '../toolbar/toolbar';
import ConversationSearch from '../conversation-search/conversation-search';
import ConversationListItem from '../conversation-list-item/conversation-list-item';
import { TConversation } from '../../types/conversation';

type ConversationList = {
  userConversations: TConversation;
  onChatClick: (conversationTitle: string) => void;
}

function ConversationList({userConversations, onChatClick}: ConversationList): JSX.Element {
  
    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" toolbarName={'settings'} toolbarImg={'/src/assets/settings.svg'}/>
          ]}
          rightItems={[
            <ToolbarButton key="plus" toolbarName={'plus'} toolbarImg={'/src/assets/plus.svg'}/>,
            <ToolbarButton key="contacts" toolbarName={'contacts'} toolbarImg={'/src/assets/contacts.svg'}/>

          ]}
        />
        <ConversationSearch />
        { userConversations &&
          userConversations.posts.map((conversation, index) =>
            <ConversationListItem
              key={index}
              photo={'/src/assets/untitled-user.jpg'}
              name={conversation.words[0] ? conversation.words[0]: 'untitled'}
              text={conversation.paragraph}
              onClick={onChatClick}
            />
          )
        }
      </div>
    );
}

export default ConversationList;