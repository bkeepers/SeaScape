import { useViewOptions } from "@/hooks/useViewOptions";
import styles from "@/styles";
import { Pressable, Text, View } from "react-native";


export default function ViewOptions() {
  const { setViewOptions } = useViewOptions();
  return (
    <View>
      {
        styles.map(({ id, name, style }) => {
          return (
            <Pressable key={id} onPress={() => setViewOptions({ mapStyle: style })}>
              <Text>{name}</Text>
            </Pressable>
          );
        })
      }
    </View>
  );
}
