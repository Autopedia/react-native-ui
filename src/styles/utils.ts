import lodash from 'lodash';
import { StyleProp } from 'react-native';

export const pickStyle = (styles: StyleProp<any>, keys: Array<string>) => {
  if (!styles) {
    return {};
  }
  let style: object;
  if (Array.isArray(styles)) {
    style = styles.reduce((acc, style) => ({ ...acc, ...style }));
  } else {
    style = styles;
  }

  return lodash.pick(style, keys);
};

export const FlexStyleKeys: Array<string> = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'aspectRatio',
  'borderBottomWidth',
  'borderEndWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderStartWidth',
  'borderTopWidth',
  'borderWidth',
  'bottom',
  'display',
  'end',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'height',
  'justifyContent',
  'left',
  'margin',
  'marginBottom',
  'marginEnd',
  'marginHorizontal',
  'marginLeft',
  'marginRight',
  'marginStart',
  'marginTop',
  'marginVertical',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'overflow',
  'padding',
  'paddingBottom',
  'paddingEnd',
  'paddingHorizontal',
  'paddingLeft',
  'paddingRight',
  'paddingStart',
  'paddingTop',
  'paddingVertical',
  'position',
  'right',
  'start',
  'top',
  'width',
  'zIndex',
];

export const ShadowStyleIOSKeys: Array<string> = [
  'shadowColor',
  'shadowOffset',
  'shadowOpacity',
  'shadowRadius',
];

export const TransformStyleKeys: Array<string> = [
  'transform',
  'transformMatrix',
  'rotation',
  'scaleX',
  'scaleY',
  'translateX',
  'translateY',
];

export const ViewOnlyStyleKeys: Array<string> = [
  'backfaceVisibility',
  'backgroundColor',
  'borderBottomColor',
  'borderBottomEndRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomStartRadius',
  'borderBottomWidth',
  'borderColor',
  'borderEndColor',
  'borderLeftColor',
  'borderLeftWidth',
  'borderRadius',
  'borderRightColor',
  'borderRightWidth',
  'borderStartColor',
  'borderStyle',
  'borderTopColor',
  'borderTopEndRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopStartRadius',
  'borderTopWidth',
  'borderWidth',
  'opacity',
  'testID',
  'elevation',
];

export const ViewStyleKeys: Array<string> = [
  ...FlexStyleKeys,
  ...ShadowStyleIOSKeys,
  ...TransformStyleKeys,
  ...ViewOnlyStyleKeys,
];

export const TextOnlyStyleKeys: Array<string> = [
  'color',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'textAlign',
  'textDecorationLine',
  'textDecorationStyle',
  'textDecorationColor',
  'textShadowColor',
  'textShadowOffset',
  'textShadowRadius',
  'textTransform',
  'testID',
  'fontVariant',
  'letterSpacing',
  'textDecorationColor',
  'textDecorationStyle',
  'writingDirection',
  'textAlignVertical',
  'includeFontPadding',
];

export const TextStyleKeys: Array<string> = [
  ...ViewStyleKeys,
  ...TextOnlyStyleKeys,
];

export const ImageOnlyStyleKeys: Array<string> = [
  'resizeMode',
  'backfaceVisibility',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'backgroundColor',
  'borderColor',
  'borderWidth',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'overflow',
  'overlayColor',
  'tintColor',
  'opacity',
];

export const ImageStyleKeys: Array<string> = [
  ...FlexStyleKeys,
  ...ShadowStyleIOSKeys,
  ...TransformStyleKeys,
  ...ImageOnlyStyleKeys,
];
