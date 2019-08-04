import {
  CSSType,
  View,
  AddChildFromBuilder,
  Color,
  Property,
  CssProperty,
  Style,
} from 'tns-core-modules/ui/core/view';

import {
  TitleVisibility,
  TabPressedEventData,
  TabEvent,
  TabReselectedEventData,
  TabSelectedEventData,
} from '../internal/internals';

import { BottomNavigationTabBase } from './bottom-navigation-tab.base';

@CSSType('BottomNavigation')
export abstract class BottomNavigationBase extends View
  implements AddChildFromBuilder {
  /**
   * Get or set the Bottom Navigation tabs
   */
  protected _items: BottomNavigationTabBase[] = [];

  get items(): BottomNavigationTabBase[] {
    return this._items;
  }

  /**
   * Get or set the current selected tab index
   */
  selectedTabIndex: number = 0;

  /**
   * Get ot Set the Title Visibility
   */
  titleVisibility: TitleVisibility = TitleVisibility.Selected;

  get inactiveColor(): Color {
    return this.style.inactiveColor;
  }

  set inactiveColor(color: Color) {
    this.style.inactiveColor = color;
  }

  get activeColor(): Color {
    return this.style.activeColor;
  }

  set activeColor(color: Color) {
    this.style.activeColor = color;
  }

  get backgroundColor(): Color {
    return this.style.backgroundColor;
  }

  set backgroundColor(color: Color) {
    this.style.backgroundColor = color;
  }

  /**
   * Method allowing to manually select a tab
   */
  selectTab(index: number): void {
    if (index === this.selectedTabIndex) {
      return;
    }

    this.selectTabNative(index);
  }

  _emitTabPressed(index: number) {
    let eventData: TabPressedEventData = {
      eventName: TabEvent.Pressed,
      object: this,
      index,
    };
    this.notify(eventData);
    this.removeBadge(index);
  }

  _emitTabReselected(index: number) {
    let eventData: TabReselectedEventData = {
      eventName: TabEvent.Reselected,
      object: this,
      index,
    };
    this.notify(eventData);
  }

  _emitTabSelected(index: number) {
    let eventData: TabSelectedEventData = {
      eventName: TabEvent.Selected,
      object: this,
      oldIndex: this.selectedTabIndex,
      newIndex: index,
    };
    this.selectedTabIndex = index;
    this.notify(eventData);
    this.removeBadge(index);
  }

  _addChildFromBuilder(name: string, value: BottomNavigationTabBase): void {
    if (name === 'BottomNavigationTab') {
      if (!this._items) {
        this._items = [];
      }
      this._items.push(value);
    }
  }

  abstract showBadge(index: number, value?: number): void;
  abstract removeBadge(index: number): void;
  protected abstract selectTabNative(index: number): void;
  protected abstract createTabs(tabs: BottomNavigationTabBase[]): void;
}

export const tabsProperty = new Property<
  BottomNavigationBase,
  BottomNavigationTabBase[]
>({
  name: 'tabs',
  affectsLayout: true,
  defaultValue: [],
});

tabsProperty.register(BottomNavigationBase);

export const titleVisibilityProperty = new Property<
  BottomNavigationBase,
  TitleVisibility
>({
  name: 'titleVisibility',
  equalityComparer: (x, y) => x === y,
  affectsLayout: true,
  defaultValue: TitleVisibility.Selected,
  valueConverter: v => TitleVisibility[v],
});

titleVisibilityProperty.register(BottomNavigationBase);

export const activeColorCssProperty = new CssProperty<Style, Color>({
  name: 'activeColor',
  cssName: 'active-color',
  equalityComparer: Color.equals,
  defaultValue: new Color('black'),
  valueConverter: v => new Color(v),
});
activeColorCssProperty.register(Style);

export const inactiveColorCssProperty = new CssProperty<Style, Color>({
  name: 'inactiveColor',
  cssName: 'inactive-color',
  equalityComparer: Color.equals,
  defaultValue: new Color('gray'),
  valueConverter: v => new Color(v),
});
inactiveColorCssProperty.register(Style);
