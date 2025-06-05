import { useMapState } from '@/hooks/useMapState';
import OverlayButton from './ui/OverlayButton';

export default function CurrentLocationButton() {
  const state = useMapState();
  const icon = state.followUserLocation ? 'my-location' : 'location-searching';

  return (
    <OverlayButton onPress={() => state.setFollowUserLocation(true)} icon={icon} />
  );
}
