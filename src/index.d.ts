import { BottomNavigationBase, BottomNavigationTabBase } from './bottom-navigation.common';
import { EventData } from 'tns-core-modules/data/observable';

export declare interface OnTabSelectedEventData extends EventData {
  oldIndex: number;
  newIndex: number;
}

export declare class BottomNavigation extends BottomNavigationBase {

  public tabs: BottomNavigationTab[];

  public selectedTabIndex: number;

  public activeColor: string;

  public inactiveColor: string;

  public backgroundColor: string;

  readonly ios: any;

  private _delegate;

  constructor();

  public createTabs(tabs: BottomNavigationTab[]): void;

  public selectTab(index: number): void;

  protected selectTabNative(index: number): void;
}

export declare class BottomNavigationTab extends BottomNavigationTabBase {
  constructor(title: string, icon: string, selectable?: boolean, parent?: WeakRef<BottomNavigationBase>);
}
