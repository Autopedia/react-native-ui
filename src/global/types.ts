import { FieldError } from 'react-hook-form';

export interface IterableProps {
  key?: React.Key;
  first?: boolean;
  last?: boolean;
}

export interface BaseInputProps<V> {
  defaultValue?: V;
  value?: V;
  onChange?: (value: V) => void;
  error?: FieldError;
  isDirty?: boolean;
}

export type BaseInputElement<V> = React.ReactElement<BaseInputProps<V>, any>;

export type LocalSource = { testUri: string };
