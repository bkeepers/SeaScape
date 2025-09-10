import type { CameraBounds, RegionPayload } from '@maplibre/maplibre-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
  followUserLocation: boolean
  zoomLevel?: number
  bounds?: CameraBounds
}

interface Actions {
  setFollowUserLocation: (follow: boolean) => void
  zoomIn(): void
  zoomOut(): void
  set(newState: Partial<State>): void
  didChange(payload: RegionPayload): void
}

export const useCameraState = create<State & Actions>()(
  persist(
    (set) => ({
      bounds: undefined,
      zoomLevel: undefined,
      followUserLocation: true,
      setFollowUserLocation: (follow: boolean) => {
        set(() => ({ followUserLocation: follow }))
      },
      zoomIn() {
        set(({ zoomLevel, ...state }) => ({ ...state, zoomLevel: (zoomLevel ?? 0) + 1 }))
      },
      zoomOut() {
        set(({ zoomLevel, ...state }) => ({ ...state, zoomLevel: (zoomLevel ?? 0) - 1 }))
      },
      didChange(e: RegionPayload) {
        if (e.isUserInteraction) {
          set({
            zoomLevel: e.zoomLevel,
            bounds: { ne: e.visibleBounds[0], sw: e.visibleBounds[1] },
          });
        }
      },
      set(newState: Partial<State>) {
        set((state) => ({ ...state, ...newState }))
      }
    }),
    {
      name: "camera",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
