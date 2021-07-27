import React from 'react';
import MapView, { LatLng, Marker, Region } from 'react-native-maps';
import styled from 'styled-components/native';

import Button from '../../../../atoms/Button';
import Typography from '../../../../atoms/Typography';
import base from '../../../../styles/base';
import colors from '../../../../styles/colors';
import { MAX_WIDTH } from '../../Message.styles';
import { ShopMessageProps } from '../../Message.types';

export const ShopMessage: React.FC<ShopMessageProps> = ({
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
            onPress={onPressDetail}
            icon={require('../../../../assets/icons/tire/tire.png')}
            spacing
          >
            상세 정보
          </SShopButton>
          <SShopButton
            onPress={onPressNavigate}
            icon={require('../../../../assets/icons/map/map.png')}
          >
            길찾기
          </SShopButton>
        </SShopButtons>
      </SShopInfo>
    </SShop>
  );
};

const SShop = styled.View`
  ${base.message}
  width: ${MAX_WIDTH}px;
  background-color: ${colors.WHITE};
`;

const SShopInfo = styled.View`
  background-color: ${colors.WHITE};
  padding: 10px;
`;
const SShopButtons = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;

interface ShopButtonProps {
  spacing?: boolean;
}

const SShopButton = styled(Button)<ShopButtonProps>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ spacing }) => spacing && `margin-right: 10px;`}
`;
SShopButton.displayName = 'ShopButton';

const SMap = styled(MapView)`
  width: 100%;
  height: 130px;
`;
