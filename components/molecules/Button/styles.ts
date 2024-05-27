import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import type { iGetContainerStyle, iGetTextStyle } from './types';
import { COLORS, SPACING } from '../../../styles';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: 58,
    borderRadius: SPACING.defaultBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    marginBottom: SPACING.defaultPadding,
  },
  outline: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 58,
    borderRadius: SPACING.defaultBorderRadius,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginBottom: 10,
  },
  text: {
    color: COLORS.white,
    fontFamily: 'mint-bold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
  },
  textOutline: {
    color: COLORS.primary,
    fontFamily: 'montserrat-bold',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
  },
  iconLeft: {
    position: 'absolute',
    left: 40,
    width: 27,
    height: 25,
    resizeMode: 'contain',
  },
  iconRight: {
    width: 27,
    height: 25,
    resizeMode: 'contain',
  },
  disabled: {},
  disabledVariant: {
    opacity: 0.6,
  },
});

const getContainerStyle = ({
  isOutline,
  disabled,
  styles,
  customStyles,
}: iGetContainerStyle): StyleProp<ViewStyle>[] => {
  const baseStyle = isOutline ? styles.outline : styles.container;
  const disabledStyle = disabled
    ? isOutline
      ? styles.disabled
      : styles.disabledVariant
    : {};

  return [baseStyle, customStyles?.container, disabledStyle];
};

const getTextStyle = ({
  isOutline,
  styles,
}: iGetTextStyle): StyleProp<TextStyle> => {
  return isOutline ? styles.textOutline : styles.text;
};

export default styles;
export { getContainerStyle, getTextStyle };
