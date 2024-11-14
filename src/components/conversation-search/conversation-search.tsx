import React from 'react';
import './conversation-search.css';

 function ConversationSearch(): JSX.Element {
    return (
      <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Messages"
        />
      </div>
    );
}

export default ConversationSearch;