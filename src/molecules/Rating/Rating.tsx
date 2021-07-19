import lodash from 'lodash';
import React, { useEffect, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

import Typography from '../../atoms/Typography';
import { ParagraphSize } from '../../atoms/Typography/Typography.types';
import { BaseInputProps } from '../../global/types';
import { Colors, Spacing } from '../../styles';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import { RatingSize } from './Rating.types';

const TOTAL = 5;
const OFFSET = 0.0865625;

interface IProps extends BaseInputProps<number> {
  size: RatingSize;
  label?: boolean;
  count?: number;
  editable?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Rating: React.FC<IProps> = props => {
  const [innerValue, setInnerValue] = useState<number>(props.defaultValue || 0);

  const ratingValue = props.value || innerValue;

  const ratingOnChange = (newValue: number) => {
    props.onChange?.(newValue);
    setInnerValue(newValue);
  };

  useEffect(() => {
    if (props.defaultValue) {
      setInnerValue(props.defaultValue);
    }
  }, [props.defaultValue]);

  let size = 0;
  let countSize: ParagraphSize = 2;
  switch (props.size) {
    case 'sm':
      size = 16;
      break;
    case 'lg':
      size = 32;
      countSize = 1;
      break;
  }

  const renderUneditableRating = () => {
    return new Array(TOTAL)
      .fill(null)
      .map((_, index) => (
        <Star
          key={index}
          size={size}
          value={lodash.clamp(ratingValue - index, 0, 1)}
        />
      ));
  };

  const renderEditableRating = () => {
    return new Array(TOTAL)
      .fill(null)
      .map((_, index) => (
        <TouchableStar
          key={index}
          selected={index < ratingValue}
          size={size}
          onPress={() => ratingOnChange(index + 1)}
        />
      ));
  };

  return (
    <SContainer style={props.style}>
      {props.editable ? renderEditableRating() : renderUneditableRating()}
      {props.label && (
        <SLabel size={props.size}>
          <Typography.Paragraph
            fontWeight={props.size === 'lg' ? 'bold' : 'regular'}
            size={props.size === 'lg' ? 1 : 2}
          >
            {ratingValue.toFixed(1)}
          </Typography.Paragraph>
          {props.count ? (
            <Typography.Paragraph size={countSize} color={colors.MUTED}>
              {' '}
              ({props.count}
              {props.size === 'lg' && '개의 리뷰'})
            </Typography.Paragraph>
          ) : null}
        </SLabel>
      )}
    </SContainer>
  );
};

interface StarProps {
  value: number;
  size: number;
}
const Star: React.FC<StarProps> = props => {
  const [loaded, setLoaded] = React.useState(false);

  const negative = props.value < 0.5 ? -1 : 1;
  const value = negative * (props.value * 2 - 1);
  const area = (negative * Math.pow(value, 1.35)) / 2 + 0.5;
  const width = props.size * (1 - 2 * OFFSET) * area;

  return (
    <SStarBackground loaded={loaded}>
      {loaded && (
        <SStarFill
          style={{
            width: width,
            left: props.size * OFFSET,
          }}
        />
      )}
      <SStar
        source={require('../../assets/icons/star/star-reversed.png')}
        onLoad={() => setLoaded(true)}
        style={{
          width: props.size,
          height: props.size,
        }}
      />
    </SStarBackground>
  );
};

interface TouchableStarProps {
  size: number;
  selected: boolean;
  onPress: () => void;
}
const TouchableStar: React.FC<TouchableStarProps> = props => {
  return (
    <SStarTouchable onPressIn={props.onPress}>
      <SStar
        source={require('../../assets/icons/star/star.png')}
        style={{
          width: props.size,
          height: props.size,
          tintColor: props.selected ? Colors.RATING : Colors.LIGHT,
        }}
      />
    </SStarTouchable>
  );
};

const SContainer = styled.View`
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
`;
const SLabel = styled.View<{ size: 'sm' | 'lg' }>`
  flex-direction: row;

  ${props => `
    align-items: ${props.size === 'sm' ? 'center' : 'baseline'};
    margin-left: ${props.size === 'sm' ? '4px' : '6px'}; 
    ${props.size === 'sm' && `margin-top: -2px;`}
  `}
`;
const SStarTouchable = styled.TouchableOpacity``;
const SStarBackground = styled.View<{ loaded: boolean }>`
  position: relative;
  height: 100%;

  ${props => `
    background-color: ${props.loaded ? colors.LIGHT : colors.BACKGROUND};
  `}
`;
const SStarFill = styled.View`
  position: absolute;
  top: 0px;
  bottom: 0px;

  ${props => `
    background-color: ${colors.RATING};
  `}
`;
const SStar = styled.Image``;

export default Rating;
