import { Link, LinkProps } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { IconSymbol, type IconSymbolProps } from './IconSymbol';

export type OverlyButtonProps = {
  icon: IconSymbolProps['name'];
} & (LinkProps | React.ComponentProps<typeof Pressable>);

export default function OverlayButton({ icon, ...props }: OverlyButtonProps) {
  const Wrapper = 'href' in props ? Link : Pressable;

  return (
    <Wrapper {...props as any} style={styles.button}>
      <IconSymbol name={icon} />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})
