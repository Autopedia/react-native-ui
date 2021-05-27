import React from 'react';
import styled from 'styled-components/native';
import { MessageProps } from './Message.types';

import {
  TextMessage,
  ImageMessage,
  VideoMessage,
  ShopMessage,
  EndConfirmedMessage,
  EventMessage,
  PostMessage,
  CounselCaseMessage,
  FeedbackMessage,
  ReviewMessage,
  EndMessage,
  OutDatedMessage,
  UnhandledMessage,
} from './Templates';

const Message: React.FC<MessageProps> = props => {
  return <SMessage>{getMessage(props)}</SMessage>;
};

const getMessage = (props: MessageProps): React.ReactNode => {
  switch (props.type) {
    case 'text':
      return <TextMessage {...props} />;
    case 'image':
      return <ImageMessage {...props} />;
    case 'video':
      return <VideoMessage {...props} />;
    case 'shop':
      return <ShopMessage {...props} />;
    case 'endconfirmed':
      return <EndConfirmedMessage {...props} />;

    /* Mine only message */
    case 'end':
      if (props.mine) break;
      return <EndMessage {...props} />;
    case 'outdated':
      if (props.mine) break;
      return <OutDatedMessage {...props} />;
    case 'feedback':
      if (props.mine) break;
      return <FeedbackMessage {...props} />;
    case 'review':
      if (props.mine) break;
      return <ReviewMessage {...props} />;

    /* Others only message */
    case 'event':
      if (!props.mine) break;
      return <EventMessage {...props} />;
    case 'post':
      if (!props.mine) break;
      return <PostMessage {...props} />;
    case 'counsel':
      if (!props.mine) break;
      return <CounselCaseMessage {...props} />;

    default:
      break;
  }

  return <UnhandledMessage mine={props.mine} />;
};

const SMessage = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export default Message;
