import { SystemColor, SystemColorMain } from '@styles/system-colors';

export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectLayout = 'inline' | 'block' | 'column';
export interface SelectOption<V> {
  value: V;
  label: string;
  sublabel?: string;
  color?: SystemColorMain;
  textColor?: SystemColor | string;
}
