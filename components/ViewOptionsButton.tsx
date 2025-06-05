import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { IconSymbol } from './ui/IconSymbol';

export default function ViewOptionsButton() {
  return (
    <Link href="/ViewOptions" style={styles.button}>
      <IconSymbol name="layers" />
    </Link>
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
