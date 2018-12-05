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
  keyLineColorCssProperty,
  titleVisibilityProperty,
  TitleVisibility
} from './bottom-navigation.common';
import { Color } from 'tns-core-modules/color';
import { fromResource } from 'tns-core-modules/image-source';
import { screen } from 'tns-core-modules/platform';
import { ios } from 'tns-core-modules/application';
import { layout } from 'tns-core-modules/ui/core/view/view';

declare const MDCBottomNavigationBar: any;
declare const UITabBarItem: any;

type MDCBottomNavigationBar = any;

declare const MDCBottomNavigationBarTitleVisibilitySelected: any;
declare const MDCBottomNavigationBarTitleVisibilityAlways: any;
declare const MDCBottomNavigationBarTitleVisibilityNever: any;

export declare class MDCBottomNavigationBarDelegate { }

export class BottomNavigationDelegate extends NSObject {

  public static ObjCProtocols = [MDCBottomNavigationBarDelegate];
  private _owner: WeakRef<BottomNavigation>;

  public static initWithOwner(owner: WeakRef<BottomNavigation>): BottomNavigationDelegate {
    const delegate = <BottomNavigationDelegate>BottomNavigationDelegate.new() as BottomNavigationDelegate;
    delegate._owner = owner;

    return delegate;
  }

  public bottomNavigationBarDidSelectItem(navigationBar: MDCBottomNavigationBar, item: UITabBarItem) {
    const bottomNavigation: BottomNavigation = this._owner.get();
    if (bottomNavigation.selectedTabIndex === item.tag) {
      bottomNavigation.onTabReselected();
    } else {
      bottomNavigation.onTabSelected(item.tag);
    }
  }

  public bottomNavigationBarShouldSelectItem(bottomNavigationBar: MDCBottomNavigationBar, item: UITabBarItem): boolean {
    const bottomNavigation: BottomNavigation = this._owner.get();
    const bottomNavigationTab = bottomNavigation.tabs[item.tag];
    if (!bottomNavigationTab.selectable) {
      bottomNavigation.onTabPressed(item.tag);
    }

    return bottomNavigationTab.selectable;
  }
}

export class BottomNavigation extends BottomNavigationBase {

  private _delegate: BottomNavigationDelegate;

  get ios(): any {
    return this.nativeView;
  }

  createNativeView(): Object {
    this._delegate = BottomNavigationDelegate.initWithOwner(new WeakRef(this));
    this.nativeView = MDCBottomNavigationBar.alloc().init();

    return this.nativeView;
  }

  initNativeView(): void {
    this.nativeView.selectedItemTintColor = new Color(this.activeColor).ios;
    this.nativeView.unselectedItemTintColor = new Color(this.inactiveColor).ios;
    this.nativeView.barTintColor = new Color(this.backgroundColor).ios;
  }

  disposeNativeView() {
    this._delegate = null;
  }

  onLoaded() {
    this.nativeView.delegate = this._delegate;
    super.onLoaded();
  }

  layoutNativeView(left: number, top: number, right: number, bottom: number): void {
    if (!this.nativeViewProtected) {
      return;
    }

    let bottomSafeArea = 0;
    if (ios.window.safeAreaInsets) {
      bottomSafeArea = ios.window.safeAreaInsets.bottom;
    }

    const viewSize: CGSize = CGSizeMake(screen.mainScreen.widthDIPs, screen.mainScreen.heightDIPs);
    const nativeViewSize: CGSize = this.nativeView.sizeThatFits(viewSize);
    const bottomBarHeight = nativeViewSize.height + bottomSafeArea;

    const nativeView = this.nativeViewProtected;
    const frame = CGRectMake(
      0,
      layout.toDeviceIndependentPixels(top),
      viewSize.width,
      bottomBarHeight
    );

    (this as any)._setNativeViewFrame(nativeView, frame);
  }

  createTabs(tabs: BottomNavigationTab[]) {
    if (!this.tabs) { this.tabs = tabs; }
    const toUITabBarItem = (tab: BottomNavigationTab, tag: number) => UITabBarItem.alloc().initWithTitleImageTag(tab.title, fromResource(tab.icon).ios, tag);
    const bottomNavigationTabs: UITabBarItem[] = tabs.map(toUITabBarItem);

    this.nativeView.items = bottomNavigationTabs;
    this.nativeView.selectedItem = bottomNavigationTabs[this.selectedTabIndex];
  }

  [tabsProperty.getDefault](): BottomNavigationTab[] {
    return null;
  }

  [tabsProperty.setNative](value: BottomNavigationTab[]) {
    this.createTabs(value);
  }

  [titleVisibilityProperty.getDefault](): TitleVisibility {
    return 'selected';
  }

  [titleVisibilityProperty.setNative](value: TitleVisibility) {
    switch (value) {
      case 'never':
        this.nativeView.titleVisibility = MDCBottomNavigationBarTitleVisibilityNever;
        break;
      case 'always':
        this.nativeView.titleVisibility = MDCBottomNavigationBarTitleVisibilityAlways;
        break;
      default:
        this.nativeView.titleVisibility = MDCBottomNavigationBarTitleVisibilitySelected;
        break;
    }
  }

  [activeColorProperty.setNative](activeColor: string) {
    this.nativeView.selectedItemTintColor = new Color(activeColor).ios;
  }

  [activeColorCssProperty.setNative](activeColor: Color) {
    this.nativeView.selectedItemTintColor = activeColor.ios;
  }

  [inactiveColorProperty.setNative](inactiveColor: string) {
    this.nativeView.unselectedItemTintColor = new Color(inactiveColor).ios;
  }

  [inactiveColorCssProperty.setNative](inactiveColor: Color) {
    this.nativeView.unselectedItemTintColor = inactiveColor.ios;
  }

  [backgroundColorProperty.setNative](backgroundColor: string) {
    this.nativeView.barTintColor = new Color(backgroundColor).ios;
  }

  [backgroundColorCssProperty.setNative](backgroundColor: Color) {
    this.nativeView.barTintColor = backgroundColor.ios;
  }

  [keyLineColorProperty.setNative](keyLineColor: string) {
    // this.nativeView.keyLine.backgroundColor = new Color(keyLineColor).ios;
  }

  [keyLineColorCssProperty.setNative](keyLineColor: Color) {
    // this.nativeView.keyLine.backgroundColor = keyLineColor.ios;
  }

  protected selectTabNative(index: number): void {
    this.nativeView.selectedItem = this.nativeView.items[index];
  }

}

export class BottomNavigationTab extends BottomNavigationTabBase {

  constructor(title: string, icon: string, selectable?: boolean, parent?: WeakRef<BottomNavigationBase>) {
    super(title, icon, selectable, parent);
  }
}
