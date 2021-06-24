import React from 'react';
import { LatLng, Marker, Region } from 'react-native-maps';
import Typography from '@atoms/Typography';
import { Spacing } from '@styles';
import { ShopMessageProps } from '../../Message.types';
import { MAX_WIDTH } from '../../Message.styles';
import styled from 'styled-components/native';
import Button from '@atoms/Button';
import Icon from '@atoms/Icon';
import MapView from 'react-native-maps';
import colors from '@styles/colors';

const ShopMessage: React.FC<ShopMessageProps> = ({
  name,
  address,
  lat,
  lng,
  onPressDetail,
  onPressNavigate,
}) => {
  const coordinates: LatLng = {
    latitude: lat,
    longitude: lng,
  };
  const region: Region = {
    ...coordinates,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <SShop>
      <SMap
        initialRegion={region}
        pitchEnabled={false}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
      >
        <Marker coordinate={coordinates} title={name} description={address} />
      </SMap>
      <SShopInfo>
        <Typography.Heading size={5}>{name}</Typography.Heading>
        <Typography.Paragraph size={2} color={colors.MUTED}>
          {address}
        </Typography.Paragraph>
        <SShopButtons>
          <SShopButton
            size="sm"
            onPress={onPressDetail}
            style={{ marginRight: Spacing.SPACE_4 }}
          >
            <SShopButtonIcon source={require('@assets/icons/shop/shop.png')} />
            <Typography.Paragraph size={2}>상세 정보</Typography.Paragraph>
          </SShopButton>
          <SShopButton size="sm" onPress={onPressNavigate}>
            <SShopButtonIcon source={require('@assets/icons/map/map.png')} />
            <Typography.Paragraph size={2}>길찾기</Typography.Paragraph>
          </SShopButton>
        </SShopButtons>
      </SShopInfo>
    </SShop>
  );
};

const SShop = styled.View`
  ${props => props.theme.base.message}
  ${props => `
    width: ${MAX_WIDTH}px;
    background-color: ${props.theme.colors.WHITE};
  `}
`;

const SShopInfo = styled.View`
  ${props => `
    background-color: ${props.theme.colors.WHITE};
    padding: ${props.theme.spacing.SPACE_10};
  `}
`;
const SShopButtons = styled.View`
  flex-direction: row;
  ${props => `
    margin-top: ${props.theme.spacing.SPACE_6};
  `}
`;

const SShopButton = styled(Button)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SShopButtonIcon = styled(Icon)`
  ${props => `
    margin-right: ${props.theme.spacing.SPACE_2};
  `}
`;

const SMap = styled(MapView)`
  ${props => `
    width: 100%;
    height: ${props.theme.spacing.SPACE_130};
  `}
`;

export default ShopMessage;
