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
  OutdatedMessage,
  UnhandledMessage,
} from './Templates';

export const Message: React.FC<MessageProps> = props => {
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

    /* Others only message */
    case 'end':
      return <EndMessage {...props} />;
    case 'outdated':
      return <OutdatedMessage {...props} />;
    case 'feedback':
      return <FeedbackMessage {...props} />;
    case 'review':
      return <ReviewMessage {...props} />;

    /* Mine only message */
    case 'event':
      return <EventMessage {...props} />;
    case 'post':
      return <PostMessage {...props} />;
    case 'counsel':
      return <CounselCaseMessage {...props} />;

    default:
      //@ts-ignore
      return <UnhandledMessage mine={props.mine} />;
  }
};

const SMessage = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;
