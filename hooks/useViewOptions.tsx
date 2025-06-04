import styles from '@/styles';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

export type ViewOptions = {
  mapStyle?: string | object;
}

const ViewOptionsContext = createContext({
  viewOptions: { mapStyle: styles[0] } as ViewOptions,
  setViewOptions: (options: ViewOptions) => { },
});

export const ViewOptionsProvider = ({ children }: PropsWithChildren) => {
  const [viewOptions, setViewOptions] = useState({});

  return (
    <ViewOptionsContext.Provider value={{ viewOptions, setViewOptions }}>
      {children}
    </ViewOptionsContext.Provider >
  );
};

export function viewOptionsReducer(state: ViewOptions, action: { type: string; payload: any }): ViewOptions {
  switch (action.type) {
    case 'setMapStyle':
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function useViewOptions() {
  const context = useContext(ViewOptionsContext);
  if (!context) {
    throw new Error('useViewOptions must be used within a ViewOptionsProvider');
  }
  return context;
}
