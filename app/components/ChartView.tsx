import { Camera, MapView } from "@maplibre/maplibre-react-native";

export default function ChartView() {
  return <MapView
    style={{ flex: 1 }}
    mapStyle="https://tileserver-i6tr.onrender.com/styles/openmarinecharts-world/style.json"
    rotateEnabled={false}

  >
    <Camera
      defaultSettings={{ centerCoordinate: [-77, 23], zoomLevel: 8 }}
    />
  </MapView>;
}
