import { EventData } from 'tns-core-modules/data/observable';
import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';
import { BottomNavigationBase, BottomNavigationTabBase } from './bottom-navigation.common';

export declare interface OnTabPressedEventData extends EventData {
  index: number;
}

export declare interface OnTabReselectedEventData extends EventData {
  index: number;
}

export declare interface OnTabSelectedEventData extends EventData {
  oldIndex: number;
  newIndex: number;
}

export type TitleVisibility = 'always' | 'selected' | 'never';

export declare class BottomNavigation extends BottomNavigationBase {
  
  protected titleVisibilityOptions;

  readonly android: any;
  readonly ios: any;

  private _delegate;

  constructor();

  public createTabs(tabs: BottomNavigationTab[]): void;

  protected selectTabNative(index: number): void;
}

export declare class BottomNavigationTab extends BottomNavigationTabBase {
  constructor(title: string, icon: string, selectable?: boolean, parent?: WeakRef<BottomNavigationBase>);
}
