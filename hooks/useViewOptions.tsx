import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from "zustand/middleware";
import styles from '../styles';

interface State {
  mapStyleId?: (typeof styles[number])["id"];
}

interface Actions {
  set: (options: Partial<State>) => void;
}

export const useViewOptions = create<State & Actions>()(
  persist(
    (set) => ({
      mapStyleId: styles[0].id,
      set(options: Partial<State>) {
        set(options)
      }
    }),
    {
      name: "view-options",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
