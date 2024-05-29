import { types } from '@babel/core';
import { ImageSourcePropType } from 'react-native';

enum VARIANTS {
  FILLED = 'filled',
  OUTLINE = 'outline',
  LIGHT = 'light',
  DARK = 'dark',
  ORANGE = 'orange',
}

type VariantType = (typeof VARIANTS)[keyof typeof VARIANTS];
interface iCustomStyles {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  container?: types.ObjectExpression;
  titleColor?: string;
  titleFontSize?: number;
}

interface iProps {
  accessibilityLabel?: string;
  customStyles?: iCustomStyles;
  disabled?: boolean;
  iconLeft?: ImageSourcePropType;
  iconRight?: ImageSourcePropType;
  onPress: () => void;
  label: string;
  variant?: VariantType;
}

interface iCustomStyles {
  container?: StyleProp<ViewStyle>;
}

interface iGetContainerStyle {
  isOutline: boolean;
  disabled: boolean;
  styles: any;
  customStyles?: iCustomStyles;
}

interface iGetTextStyle {
  isOutline: boolean;
  styles: any;
}

export type { iProps, iCustomStyles, iGetContainerStyle, iGetTextStyle };

export { VARIANTS };
