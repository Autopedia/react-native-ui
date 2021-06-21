import Icon from '@atoms/Icon';
import Typography from '@atoms/Typography';
import { ListItemSubLabelPosition } from './ListItem.types';
import lodash from 'lodash';
import React from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

interface ListItemProps {
  label: string;
  sublabel?: string;
  sublabelPosition?: ListItemSubLabelPosition;
  underlined?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  suffix?: React.ReactElement;
}

const ListItem: React.FC<ListItemProps> = props => {
  const touchableProps = lodash.pick(props, ['underlined', 'onPress']);

  return (
    <STouchable {...touchableProps} activeOpacity={props.onPress ? 0.7 : 1}>
      <SContainer>
        {props.sublabel && props.sublabelPosition === 'top' && (
          <Typography.Paragraph size="sm" color="muted">
            {props.sublabel}
          </Typography.Paragraph>
        )}
        <Typography.Paragraph>{props.label}</Typography.Paragraph>
        {props.sublabel && props.sublabelPosition !== 'top' && (
          <Typography.Paragraph size="sm" color="muted">
            {props.sublabel}
          </Typography.Paragraph>
        )}
      </SContainer>
      {props.suffix || (
        <Icon source={require('@assets/icons/chevron/chevron-right.png')} />
      )}
    </STouchable>
  );
};

type STouchableProps = Pick<ListItemProps, 'underlined' | 'onPress'>;
const STouchable = styled.TouchableOpacity<STouchableProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${props => `
    padding: ${props.theme.spacing.SPACE_12} 0px;
    background-color: ${props.theme.colors.BACKGROUND};
  `}

  /* underlined  */
  ${props =>
    props.underlined &&
    `
      border-bottom-width: 1px;
      border-bottom-color: ${props.theme.colors.EXTRALIGHT};
  `}
`;

const SContainer = styled.View``;

export default ListItem;
