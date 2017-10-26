import {
  activeColorCssProperty,
  activeColorProperty,
  backgroundColorCssProperty,
  backgroundColorProperty,
  BottomNavigationBase,
  BottomNavigationTabBase,
  inactiveColorCssProperty,
  inactiveColorProperty,
  OnTabSelectedEventData,
  tabsProperty,
} from './bottom-navigation.common';
import { Color } from 'tns-core-modules/color';
import { fromResource } from 'tns-core-modules/image-source';

declare const com, android: any;

let BitmapDrawable = android.graphics.drawable.BitmapDrawable;
let AHBottomNavigation = com.aurelhubert.ahbottomnavigation.AHBottomNavigation;
let AHBottomNavigationItem = com.aurelhubert.ahbottomnavigation.AHBottomNavigationItem;

export class BottomNavigation extends BottomNavigationBase {

  createNativeView(): Object {
    this.nativeView = new AHBottomNavigation(this._context);
    let owner = new WeakRef(this);

    this.nativeView.setOnTabSelectedListener(new AHBottomNavigation.OnTabSelectedListener(
      {
        get owner(): BottomNavigation {
          return owner.get();
        },
        onTabSelected: function (position: number, wasSelected: boolean): boolean {
          if (this.owner && !wasSelected && this.owner.selectedTabIndex !== position) {
            this.owner.onTabSelected(position);
          }

          return true;
        }
      }
    ));

    this.nativeView.setTitleState(AHBottomNavigation.TitleState.ALWAYS_SHOW);
    this.nativeView.setAccentColor(new Color(this.activeColor).android);
    this.nativeView.setInactiveColor(new Color(this.inactiveColor).android);
    this.nativeView.setColored(false);
    this.nativeView.setDefaultBackgroundColor(new Color(this.backgroundColor).android);

    return this.nativeView;
  }

  initNativeView(): void {
    this.nativeView.setTitleState(AHBottomNavigation.TitleState.ALWAYS_SHOW);
    this.nativeView.setAccentColor(new Color(this.activeColor).android);
    this.nativeView.setInactiveColor(new Color(this.inactiveColor).android);
    this.nativeView.setColored(false);
    this.nativeView.setDefaultBackgroundColor(new Color(this.backgroundColor).android);
  }

  get android(): any {
    return this.nativeView;
  }

  [tabsProperty.getDefault](): BottomNavigationTab[] {
    return null;
  }

  [tabsProperty.setNative](value: BottomNavigationTab[]) {
    this.createTabs(value);
  }

  public createTabs(tabs: BottomNavigationTab[]) {
    for (let tab of tabs) {
      let icon = new BitmapDrawable(fromResource(tab.icon).android);
      let item = new AHBottomNavigationItem(tab.title, icon, new Color('white').android);
      this.nativeView.addItem(item);
    }
    this.nativeView.setCurrentItem(this.selectedTabIndex);
  }

  [activeColorProperty.setNative](activeColor: string) {
    this.nativeView.setAccentColor(new Color(activeColor).android);
  }

  [activeColorCssProperty.setNative](activeColor: Color) {
    this.nativeView.setAccentColor(activeColor.android);
  }

  [inactiveColorProperty.setNative](inactiveColor: string) {
    this.nativeView.setInactiveColor(new Color(inactiveColor).android);
  }

  [inactiveColorCssProperty.setNative](inactiveColor: Color) {
    this.nativeView.setInactiveColor(inactiveColor.android);
  }

  [backgroundColorProperty.setNative](backgroundColor: string) {
    this.nativeView.setDefaultBackgroundColor(new Color(backgroundColor).android);
  }

  [backgroundColorCssProperty.setNative](backgroundColor: Color) {
    this.nativeView.setDefaultBackgroundColor(backgroundColor.android);
  }

  public onTabSelected(index: number) {
    let eventData: OnTabSelectedEventData = {
      eventName: 'tabSelected',
      object: this,
      oldIndex: this.selectedTabIndex,
      newIndex: index
    };
    this.selectedTabIndex = index;
    this.notify(eventData);
  }

  protected selectTabNative(index: number): void {
    this.nativeView.setCurrentItem(index);
  }

}

export class BottomNavigationTab extends BottomNavigationTabBase {
  constructor(title: string, icon: string, parent?: WeakRef<BottomNavigationBase>) {
    super(title, icon, parent);
  }
}
