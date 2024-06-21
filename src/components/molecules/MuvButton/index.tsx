import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import styles, { getContainerStyle, getTextStyle } from './styles';
import type { iProps } from './types';
import { VARIANTS } from './types.d';

function MuvButton({
  accessibilityLabel,
  customStyles,
  disabled = false,
  iconLeft,
  iconRight,
  onPress,
  label,
  variant = VARIANTS.FILLED,
}: iProps) {
  const isOutline = variant === VARIANTS.OUTLINE;
  const accsesibilityLabel = accessibilityLabel || label;

  return (
    <TouchableOpacity
      accessibilityHint={`${accsesibilityLabel}`}
      accessibilityLabel={`${accsesibilityLabel}`}
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={getContainerStyle({ isOutline, disabled, styles, customStyles })}
    >
      {iconLeft && <Image source={iconLeft} style={styles.iconLeft} />}
      <Text testID="button-title" style={getTextStyle({ isOutline, styles })}>
        {label}
      </Text>
      {iconRight && <Image source={iconRight} style={styles.iconRight} />}
    </TouchableOpacity>
  );
}

export default MuvButton;
export { MuvButton, VARIANTS };
