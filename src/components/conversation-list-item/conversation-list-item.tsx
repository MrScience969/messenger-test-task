import React, {useEffect} from 'react';
import shave from 'shave';
import './conversation-list-item.css';

type ConversationListItemProps = {
  photo: string;
  name: string;
  text: string;
  onClick: (conversationTitle: string) => void;
}

function ConversationListItem({photo, name, text, onClick}: ConversationListItemProps): JSX.Element {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  })

    return (
      <div className="conversation-list-item" onClick={() => onClick(name)}>
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ name }</h1>
          <p className="conversation-snippet">{ text }</p>
        </div>
      </div>
    );
}

export default ConversationListItem