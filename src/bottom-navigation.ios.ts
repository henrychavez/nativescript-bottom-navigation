import {
  activeColorCssProperty,
  activeColorProperty, backgroundColorCssProperty,
  backgroundColorProperty,
  BottomNavigationBase,
  BottomNavigationTabBase,
  inactiveColorCssProperty,
  inactiveColorProperty,
  OnTabSelectedEventData,
  tabsProperty
} from './bottom-navigation.common';
import { Color } from 'tns-core-modules/color';
import { fromResource } from 'tns-core-modules/image-source';
import { screen } from 'tns-core-modules/platform';

declare const MiniTabBarItem, MiniTabBar, MiniTabBarDelegate;

export class BottomNavigationDelegate extends NSObject {

  public static ObjCProtocols = [MiniTabBarDelegate];
  private _owner: WeakRef<BottomNavigation>;

  public static initWithOwner(owner: WeakRef<BottomNavigation>): BottomNavigationDelegate {
    let delegate = <BottomNavigationDelegate> BottomNavigationDelegate.new() as BottomNavigationDelegate;
    delegate._owner = owner;

    return delegate;
  }

  public onTabSelected(index: number) {
    let bar: BottomNavigation = this._owner.get();
    bar.onTabSelected(index);
  }
}

export class BottomNavigation extends BottomNavigationBase {

  private _delegate: BottomNavigationDelegate;

  createNativeView(): Object {
    this._delegate = BottomNavigationDelegate.initWithOwner(new WeakRef(this));
    this.nativeView = new MiniTabBar({ items: null });
    this.nativeView.frame = CGRectMake(0, screen.mainScreen.heightDIPs - 56, screen.mainScreen.widthDIPs, 56);

    return this.nativeView;
  }

  initNativeView(): void {
    this.nativeView.tintColor = new Color(this.activeColor).ios;
    this.nativeView.inactiveColor = new Color(this.inactiveColor).ios;
    this.nativeView.backgroundColor = new Color(this.backgroundColor).ios;
    this.nativeView.backgroundBlurEnabled = false;
  }

  public disposeNativeView() {
    this._delegate = null;
  }

  public onLoaded() {
    this.nativeView.delegate = this._delegate;
    super.onLoaded();
  }

  get ios(): any {
    return this.nativeView;
  }

  [tabsProperty.getDefault](): BottomNavigationTab[] {
    return null;
  }

  [tabsProperty.setNative](value: BottomNavigationTab[]) {
    this.createTabs(value);
  }

  public createTabs(tabs: BottomNavigationTab[]) {
    let bottomNavigationTabs = <BottomNavigationTab[]>[];
    for (let tab of tabs) {
      tab.parent = new WeakRef(this);
      let miniTabBarItem = new MiniTabBarItem({ title: tab.title, icon: fromResource(tab.icon).ios });
      bottomNavigationTabs.push(miniTabBarItem);
    }
    this.nativeView.setTabs(bottomNavigationTabs);
  }

  [activeColorProperty.setNative](activeColor: string) {
    this.nativeView.tintColor = new Color(activeColor).ios;
  }

  [activeColorCssProperty.setNative](activeColor: Color) {
    this.nativeView.tintColor = activeColor.ios;
  }

  [inactiveColorProperty.setNative](inactiveColor: string) {
    this.nativeView.inactiveColor = new Color(inactiveColor).ios;
  }

  [inactiveColorCssProperty.setNative](inactiveColor: Color) {
    this.nativeView.inactiveColor = inactiveColor.ios;
  }

  [backgroundColorProperty.setNative](backgroundColor: string) {
    this.nativeView.backgroundColor = new Color(backgroundColor).ios;
  }

  [backgroundColorCssProperty.setNative](backgroundColor: Color) {
    this.nativeView.backgroundColor = backgroundColor.ios;
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
    this.nativeView.selectItemAnimated(index, true);
  }

}

export class BottomNavigationTab extends BottomNavigationTabBase {

  constructor(title: string, icon: string, parent?: WeakRef<BottomNavigationBase>) {
    super(title, icon, parent);
  }
}
