export interface BaseInputProps<V> {
  defaultValue?: V;
  value?: V;
  onChange?: (value: V) => void;
}
