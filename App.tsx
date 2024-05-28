import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import Storybook from './.storybook';
export { MuvButton } from '@/components/molecules';
export { MuvText } from '@/components/atoms';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'ueno-light': require('@/assets/fonts/UenoLogical-Light.ttf'),
        'ueno-book': require('@/assets/fonts/UenoLogical-Book.ttf'),
        'ueno-medium': require('@/assets/fonts/UenoLogical-Medium.ttf'),
        'ueno-regular': require('@/assets/fonts/UenoLogical-Regular.ttf'),
        'ueno-italic': require('@/assets/fonts/UenoLogical-Italic.ttf'),
        'ueno-italic-200': require('@/assets/fonts/UenoLogical-MediumItalic.ttf'),
        'ueno-bold': require('@/assets/fonts/UenoLogical-Bold.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return <Storybook />;
}