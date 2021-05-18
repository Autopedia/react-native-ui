import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import SThemeDecorator from '@decorators/styled-components.decorator';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import {
  ButtonColor,
  ButtonLayout,
  ButtonSize,
} from '@atoms/Button/Button.types';

import Button from '@atoms/Button';
storiesOf('Atoms/Button', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add(
    'Playground',
    () => {
      const sizeOptions: ButtonSize[] = ['sm', 'md', 'lg'];
      const colorOptions: ButtonColor[] = [
        'default',
        'primary',
        'kakao',
        'apple',
        'google',
      ];
      const layoutOptions: ButtonLayout[] = ['inline', 'block', 'sticky'];

      return (
        <Button
          size={select('size', sizeOptions, 'md')}
          color={select('color', colorOptions, 'default')}
          layout={select('layout', layoutOptions, 'inline')}
          disabled={boolean('disabled', false)}
          icon={
            boolean('icon', false) &&
            require('../../assets/icons/shop/shop.png')
          }
          iconPosition={select('iconPosition', ['left', 'right'], 'left')}
          absoluteIcon={boolean('absoluteIcon', false)}
          onPress={e => {
            e.persist();
          }}
        >
          {text('text', 'Button')}
        </Button>
      );
    },
    {
      notes: 'Hi there',
    },
  )
  .add('Size', () => {
    return (
      <>
        <Button
          size="sm"
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Small
        </Button>
        <Button
          size="md"
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Medium
        </Button>
        <Button
          size="lg"
          onPress={e => {
            e.persist();
          }}
        >
          Large
        </Button>
      </>
    );
  })
  .add('Type', () => {
    return (
      <>
        <Button
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Default
        </Button>
        <Button
          type="link"
          onPress={e => {
            e.persist();
          }}
        >
          Link
        </Button>
      </>
    );
  })
  .add('Disabled', () => {
    return (
      <>
        <Button
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Default
        </Button>
        <Button
          disabled
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Default Disabled
        </Button>
        <Button
          type="link"
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Link
        </Button>
        <Button
          type="link"
          disabled
          onPress={e => {
            e.persist();
          }}
        >
          Link Disabled
        </Button>
      </>
    );
  })
  .add('Color/Default', () => {
    return (
      <>
        <Button
          color="default"
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Default
        </Button>
        <Button
          color="primary"
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Primary
        </Button>
        <Button
          color="kakao"
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Kakao
        </Button>
        <Button
          color="apple"
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Apple
        </Button>
        <Button
          color="google"
          onPress={e => {
            e.persist();
          }}
        >
          Google
        </Button>
      </>
    );
  })
  .add('Color/Link', () => {
    return (
      <>
        <Button
          type="link"
          color="default"
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Default
        </Button>
        <Button
          type="link"
          color="muted"
          onPress={e => {
            e.persist();
          }}
        >
          Muted
        </Button>
      </>
    );
  })
  .add('Layout/Inline', () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Button
          onPress={e => {
            e.persist();
          }}
          style={{ marginRight: 5 }}
        >
          Btn 1
        </Button>
        <Button
          onPress={e => {
            e.persist();
          }}
          style={{ marginRight: 5 }}
        >
          Btn 2
        </Button>
        <Button
          onPress={e => {
            e.persist();
          }}
          style={{ marginRight: 5 }}
        >
          Btn 3
        </Button>
        <Button
          onPress={e => {
            e.persist();
          }}
        >
          Btn 4
        </Button>
      </View>
    );
  })
  .add('Layout/Block', () => {
    return (
      <Button
        layout="block"
        onPress={e => {
          e.persist();
        }}
      >
        Block Button
      </Button>
    );
  })
  .add('Layout/Sticky', () => {
    return (
      <Button
        color="primary"
        layout="sticky"
        onPress={e => {
          e.persist();
        }}
      >
        Sticky Button
      </Button>
    );
  })
  .add('Icon/Default', () => {
    return (
      <>
        <Button
          icon={require('../../assets/icons/shop/shop.png')}
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Icon Left
        </Button>
        <Button
          icon={require('../../assets/icons/shop/shop.png')}
          iconPosition="right"
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Icon Right
        </Button>
        <Button
          layout="block"
          icon={require('../../assets/icons/shop/shop.png')}
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Block Icon Left
        </Button>
        <Button
          layout="block"
          icon={require('../../assets/icons/shop/shop.png')}
          iconPosition="right"
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Block Icon Right
        </Button>
      </>
    );
  })
  .add('Icon/Absolute', () => {
    return (
      <>
        <Button
          layout="block"
          icon={require('../../assets/icons/shop/shop.png')}
          absoluteIcon
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Absolute Icon Left
        </Button>
        <Button
          layout="block"
          icon={require('../../assets/icons/shop/shop.png')}
          iconPosition="right"
          absoluteIcon
          onPress={e => {
            e.persist();
          }}
          style={{ marginBottom: 5 }}
        >
          Absolute Icon Right
        </Button>
      </>
    );
  });
