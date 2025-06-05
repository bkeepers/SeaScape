import { create } from 'zustand';
import styles from '../styles';

interface State {
  mapStyle?: string | object;
}

interface Actions {
  set: (options: Partial<State>) => void;
}

export const useViewOptions = create<State & Actions>()((set) => ({
  mapStyle: styles[0].style,
  set: (options: Partial<State>) => set(options)
}))
