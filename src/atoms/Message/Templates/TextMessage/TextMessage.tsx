import React from 'react';
import { TextMessageProps } from '../../Message.types';
import colors from '../../../../styles/colors';
import { Markdown } from '../../../../atoms/Markdown';
import { SMyTextMessage, SOtherTextMessage } from '../../Message.styles';

export const TextMessage: React.FC<TextMessageProps> = ({ mine, text }) => {
  return mine ? (
    <SMyTextMessage>
      <Markdown selectable textColor={colors.ON_PRIMARY_DARK}>
        {text}
      </Markdown>
    </SMyTextMessage>
  ) : (
    <SOtherTextMessage>
      <Markdown selectable>{text}</Markdown>
    </SOtherTextMessage>
  );
};
