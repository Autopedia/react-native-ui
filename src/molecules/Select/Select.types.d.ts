export interface BaseInputProps<V> {
  defaultValue?: V;
  onChange?: (value: V) => void;
}
export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectLayout = 'inline' | 'block';
export interface SelectOption<V> {
  value: V;
  label: string;
  sublabel?: string;
}
