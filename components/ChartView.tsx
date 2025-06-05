import { useMapState } from "@/hooks/useMapState";
import { useViewOptions } from "@/hooks/useViewOptions";
import { Camera, MapView, UserLocation } from "@maplibre/maplibre-react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CurrentLocationButton from "./CurrentLocationButton";
import ViewOptionsButton from "./ViewOptionsButton";

export default function ChartView() {
  const viewOptions = useViewOptions();
  const mapState = useMapState();

  return <MapView
    style={{ flex: 1 }}
    mapStyle={viewOptions.mapStyle}
    rotateEnabled={false}
    pitchEnabled={false}
    attributionEnabled={false}
    localizeLabels={true}
  >
    <Camera
      followUserLocation={mapState.followUserLocation}
      onUserTrackingModeChange={(e) => {
        mapState.setFollowUserLocation(e.nativeEvent.payload.followUserLocation);
      }}
    />

    <UserLocation />

    <SafeAreaView style={{ position: "absolute", bottom: 0, left: 20, right: 20, zIndex: 1 }}>
      <View style={{ position: "absolute", left: 0 }}>
        <ViewOptionsButton />
      </View>
      <View style={{ position: "absolute", right: 0 }}>
        <CurrentLocationButton />
      </View>
    </SafeAreaView>
  </MapView>;
}
