import { useViewOptions } from "@/hooks/useViewOptions";
import { Camera, MapView } from "@maplibre/maplibre-react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChartView() {
  const { viewOptions } = useViewOptions();

  return <MapView
    style={{ flex: 1 }}
    mapStyle={viewOptions.mapStyle}
    rotateEnabled={false}
    localizeLabels={true}
  >
    <Camera
      defaultSettings={{ centerCoordinate: [-77, 23], zoomLevel: 8 }}
    />

    <SafeAreaView
      style={{ position: "absolute", bottom: 20, left: 20, zIndex: 1 }}
    >
      <Link href="/ViewOptions">View Settings</Link>
    </SafeAreaView>
  </MapView>;
}
