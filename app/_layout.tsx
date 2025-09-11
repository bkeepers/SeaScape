import { router, Stack } from "expo-router";
import { Button } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="ViewOptions" options={{
        presentation: "modal",
        title: "View Options",
        headerRight: () => (
          <Button title="Done" onPress={() => router.dismiss()} />
        ),
      }} />
    </Stack>
  );
}
