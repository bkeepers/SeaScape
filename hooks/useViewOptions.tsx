import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from "zustand/middleware";
import styles from '../styles';

interface State {
  mapStyle?: string | object;
}

interface Actions {
  set: (options: Partial<State>) => void;
}

export const useViewOptions = create<State & Actions>()(
  persist(
    (set) => ({
      mapStyle: styles[0].style,
      set: (options: Partial<State>) => set(options)
    }),
    {
      name: "view-options",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
