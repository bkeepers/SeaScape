import { RegionPayload } from '@maplibre/maplibre-react-native';
import { create } from 'zustand';

interface State {
  followUserLocation: boolean
  zoomLevel: number
}

interface Actions {
  setFollowUserLocation: (follow: boolean) => void
  zoomIn(): void
  zoomOut(): void
  set(newState: Partial<State>): void
  didChange(payload: RegionPayload): void
}

export const useCameraState = create<State & Actions>()((set) => ({
  changing: false,
  followUserLocation: true,
  zoomLevel: 12,
  setFollowUserLocation: (follow: boolean) => set({ followUserLocation: follow }),
  zoomIn() {
    set(({ zoomLevel, ...state }) => ({ ...state, zoomLevel: zoomLevel + 1 }))
  },
  zoomOut() {
    set(({ zoomLevel, ...state }) => ({ ...state, zoomLevel: zoomLevel - 1 }))
  },
  didChange({ isUserInteraction, zoomLevel }: RegionPayload) {
    if (isUserInteraction) {
      set({ zoomLevel });
    }
  },
  set(newState: Partial<State>) {
    set((state) => ({ ...state, ...newState }))
  }
}))
