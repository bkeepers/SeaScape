import { usePreferredUnits } from "@/hooks/usePreferredUnits";
import { useViewOptions } from "@/hooks/useViewOptions";
import mapStyles from "@/styles";
import {
  Button,
  Host,
  List,
  Picker,
  Section,
  VStack
} from '@expo/ui/swift-ui';

export default function ViewOptions() {
  const viewOptions = useViewOptions();
  const units = usePreferredUnits();

  return (
    <Host style={{ flex: 1 }}>
      <VStack alignment="leading">
        <List>
          <Section title="Charts">

            {
              mapStyles.map(({ id, name, style }) => {
                const isSelected = viewOptions.mapStyleId === id;
                const image = isSelected ? 'checkmark.circle.fill' : 'circle';
                const color = undefined;
                return (
                  <Button
                    variant="plain"
                    key={id}
                    systemImage={image}
                    color={color}
                    onPress={() => viewOptions.set({ mapStyleId: id })}
                  >
                    {name}
                  </Button>
                );
              })
            }
          </Section>

          <Section title="Prefered Units">
            <Picker
              label="Speed"
              options={units.possibilities('speed').map((unit) => units.describe(unit).plural)}
              selectedIndex={units.possibilities('speed').indexOf(units.speed)}
              onOptionSelected={({ nativeEvent: { index } }) => {
                units.set({ speed: units.possibilities('speed')[index] });
              }}
              variant="menu"
            />
          </Section>
        </List>
      </VStack>
    </Host>
  );
}
