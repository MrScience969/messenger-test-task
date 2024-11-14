import React from 'react';
import dayjs from 'dayjs';
import './message.css';
import { TMessage } from '../../types/messages';

type MessageProps = {
  data: TMessage;
  isMine: boolean;
  startsSequence: boolean;
  endsSequence: boolean;
  showTimestamp: boolean;
}

function Message(props: MessageProps): JSX.Element {
    const {data, isMine, startsSequence, endsSequence, showTimestamp} = props;

    const friendlyTimestamp = dayjs(data.timestamp).format('DD/MM/YYYY');

    return (
      <div className={[
        'message',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}>
        {
          showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }

        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            { data.message }
          </div>
        </div>
      </div>
    );
}

export default Message;