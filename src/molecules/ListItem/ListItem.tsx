import lodash from 'lodash';
import React from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

import Icon from '../../atoms/Icon';
import Typography from '../../atoms/Typography';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import { ListItemSubLabelPosition } from './ListItem.types';

interface ListItemProps {
  label: string;
  sublabel?: string;
  sublabelPosition?: ListItemSubLabelPosition;
  underlined?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  suffix?: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = props => {
  const touchableProps = lodash.pick(props, ['underlined', 'onPress']);

  return (
    <STouchable {...touchableProps} activeOpacity={props.onPress ? 0.7 : 1}>
      <SContainer>
        {props.sublabel && props.sublabelPosition === 'top' && (
          <Typography.Paragraph size={2} color={colors.MUTED}>
            {props.sublabel}
          </Typography.Paragraph>
        )}
        <Typography.Paragraph size={2}>{props.label}</Typography.Paragraph>
        {props.sublabel && props.sublabelPosition !== 'top' && (
          <Typography.Paragraph size={2} color={colors.MUTED}>
            {props.sublabel}
          </Typography.Paragraph>
        )}
      </SContainer>
      {props.suffix}
    </STouchable>
  );
};

type STouchableProps = Pick<ListItemProps, 'underlined' | 'onPress'>;
const STouchable = styled.TouchableOpacity<STouchableProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${props => `
    padding: 12px 0px;
    background-color: ${colors.BACKGROUND};
  `}

  /* underlined  */
  ${props =>
    props.underlined &&
    `
      border-bottom-width: 1px;
      border-bottom-color: ${colors.EXTRALIGHT};
  `}
`;

const SContainer = styled.View``;

export default ListItem;
