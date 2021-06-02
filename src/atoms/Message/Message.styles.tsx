import styled from 'styled-components/native';
import ProgressiveImage from '@atoms/ProgressiveImage';
import { Dimensions } from 'react-native';

export const MAX_WIDTH = Dimensions.get('window').width * 0.65;

export const SMyTextMessage = styled.View`
  flex-direction: row;
  ${props => `
    ${props.theme.base.message}
    
    max-width: ${MAX_WIDTH}px;
    background-color: ${props.theme.colors.PRIMARY_DARK};
    padding: ${props.theme.spacing.SPACE_6} ${props.theme.spacing.SPACE_10};
    border-top-right-radius: 0px;
  `}
`;
export const SOtherTextMessage = styled.View`
  flex-direction: row;
  align-self: flex-start;
  ${props => `
    ${props.theme.base.message}
    
    max-width: ${MAX_WIDTH}px;
    background-color: ${props.theme.colors.WHITE};
    padding: ${props.theme.spacing.SPACE_6} ${props.theme.spacing.SPACE_10};
    border-top-left-radius: 0px;
  `}
`;

export const SImage = styled(ProgressiveImage)`
  ${props => `
    overflow: hidden;
    border-radius: ${props.theme.spacing.SPACE_14};
  `}
`;

export const SContent = styled.View`
  ${props => props.theme.base.message}
  ${props => `
    width: ${MAX_WIDTH}px;
    background-color: ${props.theme.colors.WHITE};
  `}
`;
export const SContentThumbnail = styled(ProgressiveImage)`
  ${props => `
    width: 100%;
    height: ${props.theme.spacing.SPACE_130};
  `}
`;
export const SContentInfo = styled.View`
  ${props => `
    background-color: ${props.theme.colors.WHITE};
    padding: ${props.theme.spacing.SPACE_10};
  `}
`;
