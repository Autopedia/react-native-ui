export interface IterableProps {
  key?: React.Key;
  first?: boolean;
  last?: boolean;
}
export interface BaseInputProps<V> {
  defaultValue?: V;
  value?: V;
  onChange?: (value: V) => void;
}
export type BaseInputElement<V> = React.ReactElement<BaseInputProps<V>, any>;
