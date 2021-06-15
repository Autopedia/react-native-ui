import { CheckboxElement } from '@atoms/Checkbox/Checkbox';
import { TextInputElement } from '@atoms/TextInput/TextInput';
import { SelectElement } from '@molecules/Select/Select';

export interface IterableProps {
  key?: React.Key;
  first?: boolean;
  last?: boolean;
}
export interface BaseInputProps<V> {
  defaultValue?: V;
  onChange?: (value: V) => void;
}
export type BaseInputElement<V> = React.ReactElement<BaseInputProps<V>, any>;
export type InputElement<V> =
  | BaseInputElement<V>
  | SelectElement<V>
  | TextInputElement
  | CheckboxElement;
