import { COLORS } from '@/styles';
import React from 'react';
import { Text } from 'react-native';

interface MuvTextProps {
    children: string;
    size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    weight?: 'light' | 'book' | 'regular' | 'medium' | 'bold' | 'italic' | 'mediumItalic';
    color?: 'primary' | 'orange' | 'gray' | 'black' | 'blue' | 'green' | 'text' | string;
}

const MuvText: React.FC<MuvTextProps> = ({ children, size = 'sm', weight = 'regular', color = 'text'  }) => {
    
    const sizeStyle = () => {
        const sizes = {
            '2xl': 32,
            'xl': 24,
            'lg': 20,
            'md': 16,
            'sm': 14,
            'xs': 12,
        }    
        return { fontSize: sizes[size], lineHeight: sizes[size] * 1.5};
    }
    
    const fontFamilyStyle = () => {
        const fontWeights = {
            'light': 'UenoLogical-Light',
            'book': 'UenoLogical-Book',
            'regular': 'UenoLogical-Regular',
            'medium': 'UenoLogical-Medium',
            'bold': 'UenoLogical-Bold',
            'italic': 'UenoLogical-Italic',
            'mediumItalic': 'UenoLogical-MediumItalic',   
     }
        return { fontFamily: fontWeights[weight] };
    }
    const handleColor = () => {
        const colors: { [key: string]: COLORS } = {
            'primary': COLORS.primary,
            'black': COLORS.black,
            'orange': COLORS.orange,
            'blue': COLORS.blue,
            'green': COLORS.green,
            'text': COLORS.text,
        };
        if (colors[color]) {
            return { color: colors[color] };
        } else {
            return { color: color };
        }
    };
    return <Text style={[sizeStyle(), fontFamilyStyle(), handleColor()]}>{children}</Text>;
};

export default MuvText;