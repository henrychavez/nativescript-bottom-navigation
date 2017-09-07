import { BottomNavigationBase, BottomNavigationTabBase } from './bottom-navigation.common';
import { EventData } from 'tns-core-modules/data/observable';

export declare interface OnTabSelectedEventData extends EventData {
  oldIndex: number;
  newIndex: number;
}

export declare class BottomNavigation extends BottomNavigationBase {
  private _delegate;

  public tabs: BottomNavigationTab[];

  public selectedTabIndex: number;

  public activeColor: string;

  public inactiveColor: string;

  public backgroundColor: string;

  constructor();

  readonly ios: any;

  createTabs(tabs: BottomNavigationTab[]): void;

  selectTab(index: number): void;

  protected selectTabNative(index: number): void;
}

export declare class BottomNavigationTab extends BottomNavigationTabBase {
  constructor(title: string, icon: string, parent?: WeakRef<BottomNavigationBase>);
}
