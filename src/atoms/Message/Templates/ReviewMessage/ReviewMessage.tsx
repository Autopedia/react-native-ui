import React from 'react';
import { Platform } from 'react-native';

import Button from '../../../../atoms/Button';
import { ReviewMessageProps } from '../../Message.types';
import { CardMessage } from '../CardMessage';

export const ReviewMessage: React.FC<ReviewMessageProps> = ({
  onPressReview,
}) => {
  const store = Platform.OS === 'android' ? '플레이스토어' : '앱스토어';

  const title = '리뷰를 남겨주세요!';
  const description = `상담은 만족스러우셨나요?\n${store}에 리뷰를 남겨주시면 닥터차의 발전에 큰 도움이 됩니다!`;
  const footer = (
    <Button onPress={onPressReview}>{`${store} 리뷰 남기기`}</Button>
  );

  return (
    <CardMessage title={title} description={description} footer={footer} />
  );
};
