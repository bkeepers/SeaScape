import { useCameraState } from '@/hooks/useCameraState';
import OverlayButton from './ui/OverlayButton';

export default function CurrentLocationButton() {
  const state = useCameraState();
  const icon = state.followUserLocation ? 'my-location' : 'location-searching';

  return (
    <OverlayButton onPress={() => state.set({ followUserLocation: true })} icon={icon} />
  );
}
