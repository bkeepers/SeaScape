import useStyles from "@/hooks/useStyles";
import { useViewOptions } from "@/hooks/useViewOptions";
import mapStyles from "@/styles";
import {
  Button,
  Host,
  List,
  VStack
} from '@expo/ui/swift-ui';

export default function ViewOptions() {
  const styles = useStyles();
  const viewOptions = useViewOptions();

  return (
    <Host style={{ flex: 1 }}>
      <VStack>
        <List>
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
        </List>
      </VStack>
    </Host>
  );
}
