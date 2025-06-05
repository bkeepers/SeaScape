import { create } from 'zustand'

interface MapState {
  followUserLocation: boolean
  setFollowUserLocation: (follow: boolean) => void
}

export const useMapState = create<MapState>()((set) => ({
  followUserLocation: true,
  setFollowUserLocation: (follow: boolean) => set({ followUserLocation: follow })
}))
