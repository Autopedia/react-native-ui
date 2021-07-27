import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

type AnimatedDotProps = {
  delay: number;
  color: string;
};

type StyledDotProps = {
  color: string;
};

export const AnimatedDot: React.FC<AnimatedDotProps> = ({ delay, color }) => {
  const translateYAnimValue = React.useRef(new Animated.Value(0)).current;
  const opacityAnimValue = React.useRef(new Animated.Value(1)).current;

  const bounceAndFade = React.useCallback(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(translateYAnimValue, {
              toValue: -3,
              duration: 300,
              useNativeDriver: false,
            }),
            Animated.timing(translateYAnimValue, {
              toValue: 0,
              duration: 300,
              useNativeDriver: false,
            }),
          ]),
          Animated.sequence([
            Animated.timing(opacityAnimValue, {
              toValue: 0.5,
              delay: 300,
              useNativeDriver: false,
            }),
            Animated.timing(opacityAnimValue, {
              toValue: 1,
              delay: 300,
              useNativeDriver: false,
            }),
          ]),
        ]),
      ),
    ]).start();
  }, [delay, opacityAnimValue, translateYAnimValue]);

  React.useEffect(() => {
    bounceAndFade();
  }, [bounceAndFade]);

  return (
    <SDot
      color={color}
      style={{
        transform: [{ translateY: translateYAnimValue }],
        opacity: opacityAnimValue,
      }}
    />
  );
};

const SDot = styled(Animated.View)<StyledDotProps>`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${props => props.color};
  margin: 0px 3px;
`;
