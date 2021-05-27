import React from 'react';
import { Platform } from 'react-native';
import { ReviewMessageProps } from '../Message.types';
import Button from '@atoms/Button';
import { CardMessage } from '.';

const ReviewMessage: React.FC<ReviewMessageProps> = ({ onPressReview }) => {
  const store = Platform.OS === 'android' ? '플레이스토어' : '앱스토어';

  const props = {
    title: '리뷰를 남겨주세요!',
    description: `상담은 만족스러우셨나요?\n${store}에 리뷰를 남겨주시면 닥터차의 발전에 큰 도움이 됩니다!`,
    footer: (
      <Button layout="block" size="sm" onPress={onPressReview}>
        {`${store} 리뷰 남기기`}
      </Button>
    ),
  };

  return <CardMessage {...props} />;
};

export default ReviewMessage;