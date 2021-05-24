export interface BaseInputProps<V> {
  defaultValue?: V;
  onChange?: (value: V) => void;
}
