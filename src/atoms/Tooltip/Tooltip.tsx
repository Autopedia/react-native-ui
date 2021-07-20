import React from 'react';
import { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

import { grayscaleColors } from '../../styles/grayscale-colors';
import { systemColors } from '../../styles/system-colors';

type TooltipProps = {
  message: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  tailPosition?: 'left' | 'center' | 'right';
  offset?: number;
  style?: StyleProp<ViewStyle>;
};

export const Tooltip: React.FC<TooltipProps> = ({
  message,
  position = 'bottom',
  tailPosition = 'center',
  offset = 10,
  style,
  children,
}) => {
  const [layoutWidth, setLayoutWidth] = React.useState<number>(0);
  const [layoutHeight, setLayoutHeight] = React.useState<number>(0);

  const tooltipProps: STooltipProps = {
    position,
    tailPosition,
    offset,
    style,
    layoutHeight,
    layoutWidth,
  };

  const tailProps: TailProps = {
    position,
    tailPosition,
  };

  const onLayout = (e: LayoutChangeEvent) => {
    const {
      nativeEvent: {
        layout: { width, height },
      },
    } = e;
    setLayoutWidth(width);
    setLayoutHeight(height);
  };

  return (
    <SContainer onLayout={onLayout}>
      {children}
      <STooltip {...tooltipProps}>
        <SContent>
          <SMessage>{message}</SMessage>
        </SContent>
        {(position === 'top' || position === 'bottom') && (
          <SVerticalTail {...tailProps} />
        )}
        {(position === 'left' || position === 'right') && (
          <SHorizontalTailContainer {...tailProps}>
            <SHorizontalTail {...tailProps} />
          </SHorizontalTailContainer>
        )}
      </STooltip>
    </SContainer>
  );
};

type STooltipProps = Omit<TooltipProps, 'message' | 'children'> & {
  layoutWidth: number;
  layoutHeight: number;
};

type TailProps = Pick<TooltipProps, 'position' | 'tailPosition'>;

const SContainer = styled.View`
  position: relative;
`;

const STooltip = styled.View<STooltipProps>`
  position: absolute;

  ${props => {
    switch (props.position) {
      case 'top':
        return `
          align-self: center;
          bottom: ${props.layoutHeight + props.offset}px;
        `;
      case 'right':
        return `
          height: ${props.layoutHeight}px;
          justify-content: center;
          left: ${props.layoutWidth + props.offset}px;
        `;
      case 'bottom':
        return `
          align-self: center;
          top: ${props.layoutHeight + props.offset}px;
        `;
      case 'left':
        return `  
          height: ${props.layoutHeight}px;
          justify-content: center;
          right: ${props.layoutWidth + props.offset}px;
        `;
    }
  }}
`;

const SContent = styled.View`
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
    props.position === 'bottom'
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
  ${props => (props.position === 'left' ? 'right: -10px' : 'left: -10px')};
`;

const SHorizontalTail = styled.View<TailProps>`
  width: 0;
  height: 0;
  border-top-width: 6px;
  border-bottom-width: 6px;
  border-color: transparent;
  ${props =>
    props.position === 'left'
      ? `border-right-width: 0px;
         border-left-width: 12px;
         border-left-color: ${grayscaleColors.GRAY_800}
      `
      : `border-left-width: 0px;
         border-right-width: 12px;
         border-right-color: ${grayscaleColors.GRAY_800}
      `};
`;
