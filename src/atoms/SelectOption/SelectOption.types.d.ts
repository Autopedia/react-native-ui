export interface IterableProps {
  key?: React.Key;
  first?: boolean;
  last?: boolean;
}
export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectLayout = 'inline' | 'block' | 'column';
export interface SelectOption<V> {
  value: V;
  label: string;
  sublabel?: string;
}
