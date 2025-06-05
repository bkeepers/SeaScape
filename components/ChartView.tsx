import { useViewOptions } from "@/hooks/useViewOptions";
import { Camera, MapView, UserLocation } from "@maplibre/maplibre-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ViewOptionsButton from "./ViewOptionsButton";

export default function ChartView() {
  const { viewOptions } = useViewOptions();

  return <MapView
    style={{ flex: 1 }}
    mapStyle={viewOptions.mapStyle}
    rotateEnabled={false}
    localizeLabels={true}
  >
    <Camera
      followUserLocation
    />

    <UserLocation />

    <SafeAreaView
      style={{ position: "absolute", bottom: 20, left: 20, zIndex: 1 }}
    >
      <ViewOptionsButton />
    </SafeAreaView>
  </MapView>;
}
