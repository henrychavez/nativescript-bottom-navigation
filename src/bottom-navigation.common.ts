import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';
import { CssProperty, Property } from 'tns-core-modules/ui/core/properties';
import { EventData } from 'tns-core-modules/data/observable';
import { Style } from 'tns-core-modules/ui/styling/style';
import { Color } from 'tns-core-modules/color';

/**
 * Event interface for tab selected event
 */
export interface OnTabSelectedEventData extends EventData {
  oldIndex: number;
  newIndex: number;
}

export abstract class BottomNavigationBase extends View implements AddChildFromBuilder {

  /**
   * Get or set the Bottom Navigation tabs
   * @type {Array<BottomNavigationTabBase>}
   */
  public tabs: BottomNavigationTabBase[];

  /**
   * Get or set the current selected tab index
   *
   * @type {number}
   */
  public selectedTabIndex: number = 0;

  /**
   * Get or set the color of the icon and title of the selected tab.
   *
   * @type {string}
   */
  public activeColor: string = 'blue';

  /**
   * Get or set the color of the icon and title of not selected tabs.
   *
   * @type {string}
   */
  public inactiveColor: string = 'gray';

  /**
   * Get or set the backgroundColor of the bottomBar
   *
   * @type {string}
   */
  public backgroundColor: string = 'white';

  /**
   * Method allowing to manually select a tab
   *
   * @param {number} index
   */
  public selectTab(index: number): void {
    if (index !== this.selectedTabIndex) {
      this.selectTabNative(index);
    }
  }

  protected abstract selectTabNative(index: number): void;

  _addChildFromBuilder(name: string, value: any): void {
    if (name === 'BottomNavigationTab') {
      if (!this.tabs) {
        this.tabs = <BottomNavigationTabBase[]>[];
      }
      this.tabs.push(<BottomNavigationTabBase>value);
    }
  }
}

export const tabsProperty = new Property<BottomNavigationBase, BottomNavigationTabBase[]>(
  {
    name: 'tabs'
  }
);

tabsProperty.register(BottomNavigationBase);

export const activeColorProperty = new Property<BottomNavigationBase, string>(
  {
    name: 'activeColor'
  }
);

activeColorProperty.register(BottomNavigationBase);

export const activeColorCssProperty = new CssProperty<Style, Color>(
  {
    name: 'tabActiveColor',
    cssName: 'tab-active-color',
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
  });
activeColorCssProperty.register(Style);

export const inactiveColorProperty = new Property<BottomNavigationBase, string>(
  {
    name: 'inactiveColor'
  }
);

inactiveColorProperty.register(BottomNavigationBase);

export const inactiveColorCssProperty = new CssProperty<Style, Color>(
  {
    name: "tabInactiveColor",
    cssName: "tab-inactive-color",
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
  }
);
inactiveColorCssProperty.register(Style);

export const backgroundColorProperty = new Property<BottomNavigationBase, string>(
  {
    name: 'backgroundColor'
  }
);

backgroundColorProperty.register(BottomNavigationBase);

export const backgroundColorCssProperty = new CssProperty<Style, Color>(
  {
    name: "tabBackgroundColor",
    cssName: "tab-background-color",
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
  }
);
backgroundColorCssProperty.register(Style);

export class BottomNavigationTabBase {

  private _title: string;
  private _icon: string;
  private _parent?: WeakRef<BottomNavigationBase>;

  constructor(title: string, icon: string, parent?: WeakRef<BottomNavigationBase>) {
    this._title = title;
    this._icon = icon;
    if (parent) { this._parent = parent; }
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    if (this.title !== value) {
      this._title = value;
    }
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    if (this._icon !== value) {
      this._icon = value;
    }
  }

  get parent(): WeakRef<BottomNavigationBase> {
    return this._parent;
  }

  set parent(value: WeakRef<BottomNavigationBase>) {
    if (this._parent !== value) {
      this._parent = value;
    }
  }
}