import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import ProgressiveImage from '../../atoms/ProgressiveImage';
import base from '../../styles/base';
import colors from '../../styles/colors';

export const MAX_WIDTH = Dimensions.get('window').width * 0.65;

export const SMyTextMessage = styled.View`
  flex-direction: row;
  ${base.message}

  max-width: ${MAX_WIDTH}px;
  background-color: ${colors.PRIMARY_DARK};
  padding: 6px 10px;
  border-top-right-radius: 0px;
`;
export const SOtherTextMessage = styled.View`
  flex-direction: row;
  align-self: flex-start;
  ${base.message}

  max-width: ${MAX_WIDTH}px;
  background-color: ${colors.WHITE};
  padding: 6px 10px;
  border-top-left-radius: 0px;
`;

export const SImage = styled(ProgressiveImage)`
  overflow: hidden;
  border-radius: 14px;
`;
SImage.displayName = 'MessageImage';

export const SContent = styled.View`
  ${base.message}
  width: ${MAX_WIDTH}px;
  background-color: ${colors.WHITE};
`;
export const SContentThumbnail = styled(ProgressiveImage)`
  width: 100%;
  height: 130px;
`;
export const SContentInfo = styled.View`
  background-color: ${colors.WHITE};
  padding: 10px;
`;
