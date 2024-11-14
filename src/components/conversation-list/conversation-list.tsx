import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './conversation-list.css';
import ToolbarButton from '../toolbar-button/toolbar-button';
import Toolbar from '../toolbar/toolbar';
import ConversationSearch from '../conversation-search/conversation-search';
import { ConversationAnswer } from '../../types/conversation';
import ConversationListItem from '../conversation-list-item/conversation-list-item';

function ConversationList() {
  const [conversations, setConversations] = useState<ConversationAnswer[]>([]);
  useEffect(() => {
    getConversations()
  },[])

 const getConversations = () => {
    axios.get('https://randomuser.me/api/?results=20').then(response => {
        let newConversations = response.data.results.map((result) => {
          return {
            photo: result.picture.large,
            name: `${result.name.first} ${result.name.last}`,
            text: 'Hello world! This is a long message that needs to be truncated.'
          };
        });
        setConversations([...conversations, ...newConversations])
    });
  }

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch />
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              photo={conversation.photo}
              name={conversation.name}
              text={conversation.text}
            />
          )
        }
      </div>
    );
}

export default ConversationList;