import { Color } from "./product";

export interface SelectorProductProps<T> {
  collection: T[],
  handleFunction: (item: T) => void,
  selected: T,
  prop?: T extends Color ? keyof T : never;
}


export type Selector = Color | string