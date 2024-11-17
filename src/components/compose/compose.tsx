import React, { ChangeEvent, ChangeEventHandler } from 'react';
import './compose.css';

type ComposeProps = {
  newMessage: string;
  setNewMessage: (data: string) => void;
  rightItems: JSX.Element[]
}

function Compose({rightItems, setNewMessage, newMessage}: ComposeProps) {
    const onMessageChange = (evt: ChangeEvent<HTMLInputElement>) => {
      setNewMessage(evt.target.value)
    }

    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message"
          value={newMessage}
          onChange={onMessageChange}
        />
        {rightItems}
      </div>
    );
}

export default Compose;