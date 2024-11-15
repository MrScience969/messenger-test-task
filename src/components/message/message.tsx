import React from 'react';
import dayjs from 'dayjs';
import './message.css';
import { TMessage } from '../../types/messages';
import { TConversation } from '../../types/conversation';

type MessageProps = {
  message: TConversation;
  isMine: boolean;
  startsSequence?: boolean;
  endsSequence?: boolean;
  showTimestamp?: boolean;
}

function Message(props: MessageProps): JSX.Element {
    const {message, isMine, startsSequence, endsSequence, showTimestamp} = props;

    // const friendlyTimestamp = dayjs(data.timestamp).format('DD/MM/YYYY');

    return (
      <div className={[
        'message',
        `${isMine ? 'mine' : ''}`,
        // `${startsSequence ? 'start' : ''}`,
        // `${endsSequence ? 'end' : ''}`
      ].join(' ')}>
        {
          // showTimestamp &&
          //   <div className="timestamp">
          //     { friendlyTimestamp }
          //   </div>
        }

        <div className="bubble-container">
          <div className="bubble">
            { message.posts[0].sentence }
          </div>
        </div>
      </div>
    );
}

export default Message;