import { create } from 'zustand'

interface State {
  followUserLocation: boolean
}

interface Actions {
  setFollowUserLocation: (follow: boolean) => void
}

export const useMapState = create<State & Actions>()((set) => ({
  followUserLocation: true,
  setFollowUserLocation: (follow: boolean) => set({ followUserLocation: follow })
}))
