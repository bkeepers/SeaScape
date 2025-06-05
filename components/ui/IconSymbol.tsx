import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, ViewStyle, type StyleProp, type TextStyle } from 'react-native';

// Map MaterialIcons names to SymbolView names.
// See Symbols app for names: https://developer.apple.com/sf-symbols/
const MAPPING: Partial<Record<ComponentProps<typeof MaterialIcons>['name'], SymbolViewProps['name']>> = {
  'layers': 'square.3.layers.3d',
};

export type IconSymbolProps = {
  name: keyof typeof MAPPING;
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  weight?: SymbolWeight;
}

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: IconSymbolProps) {
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={MAPPING[name]!}
      style={[
        {
          width: size,
          height: size,
        },
        style as StyleProp<ViewStyle>,
      ]}
      fallback={<MaterialIcons color={color} size={size} name={name} style={style as StyleProp<TextStyle>} />}
    />
  );
}
