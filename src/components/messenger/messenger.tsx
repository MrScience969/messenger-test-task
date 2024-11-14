import React from 'react';
import './messenger.css';
import ConversationList from '../conversation-list/conversation-list';
import Toolbar from '../toolbar/toolbar';
import ToolbarButton from '../toolbar-button/toolbar-button';
import MessageList from '../message-list/message-list';

export default function Messenger(): JSX.Element {
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
          <ConversationList/>
        </div>

        <div className="scrollable content">
          <MessageList />
        </div>
      </div>
    );
}