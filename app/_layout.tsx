import { ViewOptionsProvider } from "@/hooks/useViewOptions";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ViewOptionsProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="ViewOptions" options={{ presentation: "modal", title: "View Options" }} />
      </Stack>
    </ViewOptionsProvider>
  );
}
