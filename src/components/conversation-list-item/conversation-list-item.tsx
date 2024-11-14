import React, {useEffect} from 'react';
import shave from 'shave';
import './conversation-list-item.css';

type ConversationListItemProps = {
  photo: string;
  name: string;
  text: string;
}

function ConversationListItem({photo, name, text}: ConversationListItemProps): JSX.Element {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  })

    return (
      <div className="conversation-list-item">
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ name }</h1>
          <p className="conversation-snippet">{ text }</p>
        </div>
      </div>
    );
}

export default ConversationListItem