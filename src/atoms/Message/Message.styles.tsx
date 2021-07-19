import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import ProgressiveImage from '../../atoms/ProgressiveImage';
import base from '../../styles/base';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

export const MAX_WIDTH = Dimensions.get('window').width * 0.65;

export const SMyTextMessage = styled.View`
  flex-direction: row;
  ${props => `
    ${base.message}
    
    max-width: ${MAX_WIDTH}px;
    background-color: ${colors.PRIMARY_DARK};
    padding: 6px 10px;
    border-top-right-radius: 0px;
  `}
`;
export const SOtherTextMessage = styled.View`
  flex-direction: row;
  align-self: flex-start;
  ${props => `
    ${base.message}
    
    max-width: ${MAX_WIDTH}px;
    background-color: ${colors.WHITE};
    padding: 6px 10px;
    border-top-left-radius: 0px;
  `}
`;

export const SImage = styled(ProgressiveImage)`
  ${props => `
    overflow: hidden;
    border-radius: 14px;
  `}
`;

export const SContent = styled.View`
  ${props => base.message}
  ${props => `
    width: ${MAX_WIDTH}px;
    background-color: ${colors.WHITE};
  `}
`;
export const SContentThumbnail = styled(ProgressiveImage)`
  ${props => `
    width: 100%;
    height: 130px;
  `}
`;
export const SContentInfo = styled.View`
  ${props => `
    background-color: ${colors.WHITE};
    padding: 10px;
  `}
`;
