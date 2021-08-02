import React from 'react';
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';

import { grayscaleColors } from '../../styles/grayscale-colors';
import { systemColors } from '../../styles/system-colors';

type TooltipProps = {
  message: string;
  location?: 'top' | 'right' | 'bottom' | 'left';
  tailPosition?: 'left' | 'center' | 'right';
  offset?: number;
  autoHide?: boolean;
  duration?: number;
  style?: StyleProp<ViewStyle>;
};

export const Tooltip: React.FC<TooltipProps> = ({
  message,
  location = 'bottom',
  tailPosition = 'center',
  offset = 10,
  autoHide,
  duration = 4000,
  style,
  children,
}) => {
  const [layout, setLayout] = React.useState<{ width: number; height: number }>(
    {
      width: 0,
      height: 0,
    },
  );

  const tooltipAnimValue = React.useRef(new Animated.Value(0)).current;

  const tailProps: TailProps = {
    location,
    tailPosition,
  };

  const hideTooltip = () => {
    Animated.timing(tooltipAnimValue, {
      toValue: 0,
      duration,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    }).start();
  };

  const onLayout = (e: LayoutChangeEvent) => {
    const {
      nativeEvent: { layout },
    } = e;
    setLayout(layout);
  };

  React.useEffect(() => {
    if (autoHide) {
      hideTooltip();
    }
  }, []);

  return (
    <SContainer onLayout={onLayout}>
      {children}
      <STooltip
        location={location}
        tailPosition={tailPosition}
        offset={offset}
        layoutHeight={layout.height}
        layoutWidth={layout.width}
        style={[style, { opacity: autoHide ? tooltipAnimValue : 1 }]}
      >
        <SContent>
          <SMessage>{message}</SMessage>
        </SContent>
        {location === 'top' || location === 'bottom' ? (
          <SVerticalTail {...tailProps} />
        ) : (
          <SHorizontalTailContainer {...tailProps}>
            <SHorizontalTail {...tailProps} />
          </SHorizontalTailContainer>
        )}
      </STooltip>
    </SContainer>
  );
};

export type STooltipProps = Omit<TooltipProps, 'message' | 'children'> & {
  layoutWidth: number;
  layoutHeight: number;
};

type TailProps = Pick<TooltipProps, 'location' | 'tailPosition'>;

const SContainer = styled.View`
  position: relative;
`;

const STooltip = styled(Animated.View)<STooltipProps>`
  position: absolute;
  justify-content: center;

  ${props => {
    switch (props.location) {
      case 'top':
        return `
          align-self: center;
          align-items: center;
          bottom: ${props.layoutHeight + props.offset}px;
        `;
      case 'right':
        return `
          align-items: flex-start;
          width: 400px;
          top: -${props.layoutHeight / 2}px;
          left: ${props.layoutWidth + props.offset}px;
        `;
      case 'bottom':
        return `
          align-self: center;
          align-items: center;
          top: ${props.layoutHeight + props.offset}px;
        `;
      case 'left':
        return `  
          align-items: flex-end;
          width: 400px;
          top: -${props.layoutHeight / 2}px;
          right: ${props.layoutWidth + props.offset}px;
        `;
    }
  }}
`;

STooltip.displayName = 'Tooltip';

const SContent = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: ${grayscaleColors.GRAY_800};
  border-radius: 20px;
`;

const SMessage = styled.Text`
  color: ${systemColors.WHITE};
`;

const SVerticalTail = styled.View<TailProps>`
  position: absolute;
  width: 0;
  height: 0;
  border-right-width: 6px;
  border-left-width: 6px;
  border-color: transparent;
  ${props =>
    props.location === 'bottom'
      ? `
      border-bottom-width: 12px;
      border-top-width: 0px;
      border-bottom-color: ${grayscaleColors.GRAY_800}
      top: -10px;
  `
      : `
      border-top-width: 12px;
      border-bottom-width: 0px;
      border-top-color: ${grayscaleColors.GRAY_800}
      bottom: -10px;
  `}

  ${props => {
    switch (props.tailPosition) {
      case 'left':
        return `
          left: 18px;
        `;
      case 'center':
        return `
          align-self: center;
        `;
      case 'right':
        return `
          right: 18px;
        `;
    }
  }}
`;

const SHorizontalTailContainer = styled.View<TailProps>`
  position: absolute;
  height: 100%;
  justify-content: center;
  ${props => (props.location === 'left' ? 'right: -10px' : 'left: -10px')};
`;

const SHorizontalTail = styled.View<TailProps>`
  width: 0;
  height: 0;
  border-top-width: 6px;
  border-bottom-width: 6px;
  border-color: transparent;
  ${props =>
    props.location === 'left'
      ? `border-right-width: 0px;
         border-left-width: 12px;
         border-left-color: ${grayscaleColors.GRAY_800}
      `
      : `border-left-width: 0px;
         border-right-width: 12px;
         border-right-color: ${grayscaleColors.GRAY_800}
      `};
`;
