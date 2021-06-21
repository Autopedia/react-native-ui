import { action } from '@storybook/addon-actions';
import { boolean, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import SThemeDecorator from '@decorators/styled-components.decorator';
import Rating from './Rating';
import { RatingSize } from './Rating.types';

storiesOf('Molecules/Rating', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    const sizeOptions: RatingSize[] = ['sm', 'lg'];
    const useFixedValue = boolean('useFixedValue', false);

    return (
      <Rating
        size={select('size', sizeOptions, 'sm')}
        label={boolean('label', true)}
        count={number('count', 1)}
        editable={boolean('editable', true)}
        {...(useFixedValue
          ? { value: number('value', 1, { max: 5, min: 0 }) }
          : {})}
        defaultValue={number('defaultValue', 1, { max: 5, min: 0 })}
        onChange={v => action('onChange')(v)}
      />
    );
  })
  .add('Size', () => {
    return (
      <>
        <Rating size="sm" value={1} />
        <Rating size="lg" value={1} />
      </>
    );
  })
  .add('Label', () => {
    return (
      <>
        <Rating size="sm" value={1} />
        <Rating size="sm" label value={1} />
      </>
    );
  })
  .add('Count', () => {
    return (
      <>
        <Rating size="sm" value={1} label />
        <Rating size="sm" value={1} label count={1} />
      </>
    );
  })
  .add('Value', () => {
    return (
      <>
        <Rating size="sm" value={0} />
        <Rating size="sm" value={1} />
        <Rating size="sm" value={2} />
        <Rating size="sm" value={3} />
        <Rating size="sm" value={4} />
        <Rating size="sm" value={5} />
      </>
    );
  })
  .add('Editable', () => {
    return (
      <>
        <Rating size="sm" label value={1} editable />
        <Rating size="sm" label value={1} />
      </>
    );
  });
