import { useCameraState } from "@/hooks/useCameraState";
import { useViewOptions } from "@/hooks/useViewOptions";
import { Camera, MapView, UserLocation } from "@maplibre/maplibre-react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CurrentLocationButton from "./CurrentLocationButton";
import ViewOptionsButton from "./ViewOptionsButton";
import ZoomAndScale from "./ZoomAndScale";

export default function ChartView() {
  const viewOptions = useViewOptions();
  const cameraState = useCameraState();

  return <>
    <MapView
      style={StyleSheet.absoluteFill}
      mapStyle={viewOptions.mapStyle}
      rotateEnabled={false}
      pitchEnabled={false}
      attributionEnabled={false}
      localizeLabels={true}
      onRegionDidChange={(e) => cameraState.didChange(e.properties)}
    >
      <Camera
        followUserLocation={cameraState.followUserLocation}
        zoomLevel={cameraState.zoomLevel}
        animationMode="easeTo"
        animationDuration={1000}
        heading={0}
        pitch={0}
        onUserTrackingModeChange={(e) => {
          cameraState.set({ followUserLocation: e.nativeEvent.payload.followUserLocation });
        }}
      />
      <UserLocation />
    </MapView >
    <SafeAreaView style={{ position: "absolute", top: 0, right: 20, zIndex: 1 }}>
      <ZoomAndScale />
    </SafeAreaView>
    <SafeAreaView style={{ position: "absolute", bottom: 0, left: 20, zIndex: 1 }}>
      <ViewOptionsButton />
    </SafeAreaView>
    <SafeAreaView style={{ position: "absolute", bottom: 0, right: 20, zIndex: 1 }}>
      <CurrentLocationButton />
    </SafeAreaView>
  </>
}
