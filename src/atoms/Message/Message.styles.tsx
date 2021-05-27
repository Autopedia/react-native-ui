import styled from 'styled-components/native';
import ProgressiveImage from '@atoms/ProgressiveImage';
import Button from '@atoms/Button';
import Icon from '@atoms/Icon';
import MapView from 'react-native-maps';
import Video from 'react-native-video';
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

export const SVideoMessage = styled.View`
  position: relative;
  overflow: hidden;
  ${props => `
    border-radius: ${props.theme.spacing.SPACE_14};
  `}
`;
export const SVideo = styled(Video)``;
export const SVideoOverlay = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const SShop = styled.View`
  ${props => props.theme.base.message}
  ${props => `
    width: ${MAX_WIDTH}px;
    background-color: ${props.theme.colors.WHITE};
  `}
`;
export const SMap = styled(MapView)`
  ${props => `
    width: 100%;
    height: ${props.theme.spacing.SPACE_130};
  `}
`;
export const SShopInfo = styled.View`
  ${props => `
    background-color: ${props.theme.colors.WHITE};
    padding: ${props.theme.spacing.SPACE_10};
  `}
`;
export const SShopButtons = styled.View`
  flex-direction: row;
  ${props => `
    margin-top: ${props.theme.spacing.SPACE_6};
  `}
`;
export const SShopButton = styled(Button)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const SShopButtonIcon = styled(Icon)`
  ${props => `
    margin-right: ${props.theme.spacing.SPACE_2};
  `}
`;

export const SCard = styled.View`
  ${props => props.theme.base.message}
  ${props => `
    width: ${MAX_WIDTH}px;
    background-color: ${props.theme.colors.WHITE};
    padding: ${props.theme.spacing.SPACE_14};
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
