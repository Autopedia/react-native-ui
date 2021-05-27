import React from 'react';
import { LatLng, Marker, Region } from 'react-native-maps';
import Typography from '@atoms/Typography';
import { Spacing } from '@styles';
import { ShopMessageProps } from '../Message.types';
import {
  SShop,
  SMap,
  SShopInfo,
  SShopButtons,
  SShopButton,
  SShopButtonIcon,
} from '../Message.styles';

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
        <Typography.Paragraph size="sm" color="muted">
          {address}
        </Typography.Paragraph>
        <SShopButtons>
          <SShopButton
            size="sm"
            onPress={onPressDetail}
            style={{ marginRight: Spacing.SPACE_4 }}
          >
            <SShopButtonIcon source={require('@assets/icons/shop/shop.png')} />
            <Typography.Paragraph size="sm">상세 정보</Typography.Paragraph>
          </SShopButton>
          <SShopButton size="sm" onPress={onPressNavigate}>
            <SShopButtonIcon source={require('@assets/icons/map/map.png')} />
            <Typography.Paragraph size="sm">길찾기</Typography.Paragraph>
          </SShopButton>
        </SShopButtons>
      </SShopInfo>
    </SShop>
  );
};

export default ShopMessage;
