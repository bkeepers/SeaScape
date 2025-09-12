import AsyncStorage from '@react-native-async-storage/async-storage';
import configureMeasurements, { UnitDescription } from 'convert-units';
import speed, { SpeedUnits } from 'convert-units/definitions/speed';
import { create } from 'zustand';
import { createJSONStorage, persist } from "zustand/middleware";

const convert = configureMeasurements({ speed });

interface State {
  speed: SpeedUnits;
}

interface Actions {
  possibilities(measure: "speed"): SpeedUnits[];
  toSpeed(value: number | undefined, options?: { from?: SpeedUnits, decimals?: number }): { value: string; } & UnitDescription;
  set(state: Partial<State>): void;
  describe(unit: SpeedUnits): UnitDescription;
}

export const usePreferredUnits = create<State & Actions>()(
  persist(
    (set) => {
      return {
        speed: 'knot',
        set,

        possibilities(measure) {
          return convert().possibilities(measure);
        },

        describe(unit) {
          return convert().describe(unit);
        },

        toSpeed(measure, { from = 'm/s', decimals = 1 } = {}) {
          let value = convert(measure).from(from).to(this.speed).toFixed(decimals);

          return {
            value,
            ...convert().describe(this.speed)
          }
        }
      }
    },
    {
      name: "preferred-units",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
