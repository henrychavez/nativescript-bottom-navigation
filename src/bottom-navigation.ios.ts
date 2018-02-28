import {
  activeColorCssProperty,
  activeColorProperty,
  backgroundColorCssProperty,
  backgroundColorProperty,
  BottomNavigationBase,
  BottomNavigationTabBase,
  inactiveColorCssProperty,
  inactiveColorProperty,
  tabsProperty,
  keyLineColorProperty,
  keyLineColorCssProperty
} from './bottom-navigation.common';
import { Color } from 'tns-core-modules/color';
import { fromResource } from 'tns-core-modules/image-source';
import { screen } from 'tns-core-modules/platform';
import { ios } from 'tns-core-modules/application';

declare const MiniTabBarItem, MiniTabBar, MiniTabBarDelegate: any;

export class BottomNavigationDelegate extends NSObject {

  public static ObjCProtocols = [MiniTabBarDelegate];
  private _owner: WeakRef<BottomNavigation>;

  public static initWithOwner(owner: WeakRef<BottomNavigation>): BottomNavigationDelegate {
    let delegate = <BottomNavigationDelegate>BottomNavigationDelegate.new() as BottomNavigationDelegate;
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

  get ios(): any {
    return this.nativeView;
  }

  createNativeView(): Object {
    this._delegate = BottomNavigationDelegate.initWithOwner(new WeakRef(this));
    this.nativeView = new MiniTabBar({ items: null });
    const bottomSafeArea = ios.window.safeAreaInsets.bottom;
    const bottomBarHeight = 56 + bottomSafeArea;
    this.nativeView.frame = CGRectMake(0, screen.mainScreen.heightDIPs - bottomBarHeight, screen.mainScreen.widthDIPs, bottomBarHeight);

    return this.nativeView;
  }

  initNativeView(): void {
    this.nativeView.tintColor = new Color(this.activeColor).ios;
    this.nativeView.inactiveColor = new Color(this.inactiveColor).ios;
    this.nativeView.backgroundColor = new Color(this.backgroundColor).ios;
    this.nativeView.keyLine.backgroundColor = new Color(this.keyLineColor).ios;
    this.nativeView.backgroundBlurEnabled = false;
  }

  disposeNativeView() {
    this._delegate = null;
  }

  onLoaded() {
    this.nativeView.delegate = this._delegate;
    super.onLoaded();
  }

  createTabs(tabs: BottomNavigationTab[]) {
    if (!this.tabs) { this.tabs = tabs; }
    let bottomNavigationTabs = <BottomNavigationTab[]>[];
    for (let tab of tabs) {
      tab.parent = new WeakRef(this);
      let miniTabBarItem = new MiniTabBarItem({ title: tab.title, icon: fromResource(tab.icon).ios });
      miniTabBarItem.selectable = tab.selectable;
      bottomNavigationTabs.push(miniTabBarItem);
    }
    this.nativeView.setTabs(bottomNavigationTabs);
    this.nativeView.selectItemAnimated(this.selectedTabIndex, true);
  }

  [tabsProperty.getDefault](): BottomNavigationTab[] {
    return null;
  }

  [tabsProperty.setNative](value: BottomNavigationTab[]) {
    this.createTabs(value);
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

  [keyLineColorProperty.setNative](keyLineColor: string) {
    console.log('seas', keyLineColor);
    this.nativeView.keyLine.backgroundColor = new Color(keyLineColor).ios;
  }

  [keyLineColorCssProperty.setNative](keyLineColor: Color) {
    this.nativeView.keyLine.backgroundColor = keyLineColor.ios;
  }

  protected selectTabNative(index: number): void {
    this.nativeView.selectItemAnimated(index, true);
  }

}

export class BottomNavigationTab extends BottomNavigationTabBase {

  constructor(title: string, icon: string, selectable?: boolean, parent?: WeakRef<BottomNavigationBase>) {
    super(title, icon, selectable, parent);
  }
}
