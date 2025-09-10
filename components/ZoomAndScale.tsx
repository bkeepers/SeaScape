import { useCameraState } from "@/hooks/useCameraState";
import { View } from "react-native";
import OverlayButton from './ui/OverlayButton';

export default function ZoomAndScale() {
  const camera = useCameraState();

  return (
    <View style={{ flexDirection: 'column', gap: 10 }}>
      <OverlayButton onPress={() => camera.zoomIn()} icon="zoom-in" />
      <OverlayButton onPress={() => camera.zoomOut()} icon="zoom-out" />
    </View>
  );
}
