import React from 'react';
import './compose.css';

type ComposeProps = {
  rightItems: JSX.Element[]
}

function Compose({rightItems}: ComposeProps) {
    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message"
        />
        {rightItems}
      </div>
    );
}

export default Compose;