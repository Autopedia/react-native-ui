import React from 'react';
import styled from 'styled-components/native';

import fonts from '../../styles/fonts';
import { grayscaleColors } from '../../styles/grayscale-colors';
import { systemColors } from '../../styles/system-colors';

export type ListTab<V> = {
  label: string;
  value: V;
};

type ListTabsProps<V> = {
  value?: V;
  defaultValue?: V;
  tabs: ListTab<V>[];
  onChange?: (value: V) => void;
};

type STabProps = {
  selected: boolean;
};

export const ListTabs = <V extends unknown>(props: ListTabsProps<V>) => {
  const [innerValue, setInnerValue] = React.useState<V>(
    props.defaultValue || props.tabs[0].value,
  );

  const tabValue = props.value || innerValue;

  const onPressTab = (value: V) => {
    setInnerValue(value);
    props.onChange?.(value);
  };

  return (
    <SContainer>
      {props.tabs.map((tab, index) => (
        <STab
          key={index}
          selected={tabValue === tab.value}
          onPress={() => onPressTab(tab.value)}
        >
          <STabLabel selected={tabValue === tab.value}>{tab.label}</STabLabel>
        </STab>
      ))}
    </SContainer>
  );
};

const SContainer = styled.View`
  padding: 0px 10px;
  flex-direction: row;
`;

const STab = styled.TouchableOpacity<STabProps>`
  padding: 8px 0px;
  margin: 0px 10px;
  border-bottom-width: ${props => (props.selected ? '2px' : '0px')};
  border-bottom-color: ${systemColors.BLACK};
`;

const STabLabel = styled.Text<STabProps>`
  font-family: ${fonts.family.BOLD};
  font-size: ${fonts.size.M}px;
  line-height: ${fonts.lineHeight.M}px;
  color: ${props =>
    props.selected ? systemColors.BLACK : grayscaleColors.GRAY_400};
`;
