import lodash from 'lodash';
import React from 'react';
import {
  Animated,
  Easing,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';

import Typography from '../../atoms/Typography';
import colors from '../../styles/colors';
import { grayscaleColors } from '../../styles/grayscale-colors';
import { ListItemSubLabelPosition } from './ListItem.types';

interface ListItemProps {
  label: string;
  sublabel?: string;
  sublabelPosition?: ListItemSubLabelPosition;
  underlined?: boolean;
  icon?: string;
  loading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  suffix?: React.ReactElement;
  style?: StyleProp<ViewStyle>;
}

const ListItem: React.FC<ListItemProps> = props => {
  const loadingAnimValue = React.useRef(new Animated.Value(1)).current;

  const startLoading = React.useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(loadingAnimValue, {
          toValue: 0.7,
          duration: 300,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.quad),
        }),
        Animated.timing(loadingAnimValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.quad),
        }),
      ]),
    ).start();
  }, [loadingAnimValue]);

  React.useEffect(() => {
    if (props.loading) {
      startLoading();
    } else {
      loadingAnimValue.stopAnimation();
    }
  }, [loadingAnimValue, props.loading, startLoading]);

  const touchableProps = lodash.pick(props, ['underlined', 'onPress', 'style']);

  return (
    <STouchable {...touchableProps} underlayColor={grayscaleColors.GRAY_200}>
      <>
        {props.icon &&
          (props.loading ? (
            <SLoadingIcon style={{ opacity: loadingAnimValue }} />
          ) : (
            <SIcon source={{ uri: props.icon }} />
          ))}
        {props.loading ? (
          <SLoadingContent style={{ opacity: loadingAnimValue }} />
        ) : (
          <SContainer>
            {props.sublabel && props.sublabelPosition === 'top' && (
              <Typography.Paragraph size={2} color={colors.MUTED}>
                {props.sublabel}
              </Typography.Paragraph>
            )}
            <Typography.Paragraph size={props.icon ? 1 : 2}>
              {props.label}
            </Typography.Paragraph>
            {props.sublabel && props.sublabelPosition !== 'top' && (
              <Typography.Paragraph size={2} color={colors.MUTED}>
                {props.sublabel}
              </Typography.Paragraph>
            )}
          </SContainer>
        )}
        {props.suffix}
      </>
    </STouchable>
  );
};

type STouchableProps = Pick<ListItemProps, 'underlined' | 'onPress'>;
const STouchable = styled.TouchableHighlight<STouchableProps>`
  flex-direction: row;
  align-items: center;

  padding: 14px 20px;
  background-color: ${grayscaleColors.GRAY_100};

  ${props =>
    props.underlined &&
    `
      border-bottom-width: 1px;
      border-bottom-color: ${grayscaleColors.GRAY_200};
  `};
`;

const SContainer = styled.View``;

const SLoadingContent = styled(Animated.View)`
  width: 200px;
  height: 24px;
  background-color: ${grayscaleColors.GRAY_200};
`;

const SIcon = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  margin-right: 8px;
  border-width: 1px;
  border-color: ${grayscaleColors.GRAY_200};
`;

const SLoadingIcon = styled(Animated.View)`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  margin-right: 8px;
  background-color: ${grayscaleColors.GRAY_200};
`;

export default ListItem;
