import { screen } from 'tns-core-modules/platform';
import { ios } from 'tns-core-modules/application';
import {
  layout,
  backgroundColorProperty,
  Color,
} from 'tns-core-modules/ui/core/view';

import {
  BottomNavigationBase,
  tabsProperty,
  titleVisibilityProperty,
  activeColorCssProperty,
  inactiveColorCssProperty,
} from '../base/bottom-navigation.base';
import { TitleVisibility } from '../internal/internals';

import { BottomNavigationTab } from './bottom-navigation-tab';
import { BottomNavigationDelegate } from './bottom-navigation.delegate';

declare const MDCBottomNavigationBar: any;

declare type MDCBottomNavigationBar = any;

export class BottomNavigation extends BottomNavigationBase {
  protected _items: BottomNavigationTab[];
  private _delegate: BottomNavigationDelegate;

  get ios(): MDCBottomNavigationBar {
    return this.nativeView;
  }

  createNativeView(): Object {
    this._delegate = BottomNavigationDelegate.initWithOwner(new WeakRef(this));
    this.nativeView = MDCBottomNavigationBar.alloc().init();

    return this.nativeView;
  }

  initNativeView(): void {
    this.createTabs();

    this.nativeView.selectedItemTintColor = this.activeColor.ios;
    this.nativeView.unselectedItemTintColor = this.inactiveColor.ios;
  }

  disposeNativeView() {
    this._delegate = null;
  }

  onLoaded() {
    super.onLoaded();
    this.nativeView.delegate = this._delegate;
  }

  layoutNativeView(
    left: number,
    top: number,
    right: number,
    bottom: number,
  ): void {
    if (!this.nativeViewProtected) {
      return;
    }

    let bottomSafeArea = 0;
    if (ios.window.safeAreaInsets) {
      bottomSafeArea = ios.window.safeAreaInsets.bottom;
    }

    const viewSize: CGSize = CGSizeMake(
      screen.mainScreen.widthDIPs,
      screen.mainScreen.heightDIPs,
    );
    const nativeViewSize: CGSize = this.nativeView.sizeThatFits(viewSize);
    const bottomBarHeight = nativeViewSize.height + bottomSafeArea;

    const nativeView = this.nativeViewProtected;
    const frame = CGRectMake(
      0,
      layout.toDeviceIndependentPixels(top),
      viewSize.width,
      bottomBarHeight,
    );

    (this as any)._setNativeViewFrame(nativeView, frame);
  }

  [tabsProperty.setNative](tabs: BottomNavigationTab[]) {
    this.createTabs(tabs);
  }

  [titleVisibilityProperty.setNative](titleVisibility: TitleVisibility) {
    this.nativeView.titleVisibility = titleVisibility;
  }

  [activeColorCssProperty.setNative](activeColor: Color) {
    this.nativeView.selectedItemTintColor = activeColor.ios;
  }

  [inactiveColorCssProperty.setNative](inactiveColor: Color) {
    this.nativeView.unselectedItemTintColor = inactiveColor.ios;
  }

  [backgroundColorProperty.setNative](backgroundColor: Color) {
    this.nativeView.barTintColor = backgroundColor.ios;
  }

  protected createTabs(tabs?: BottomNavigationTab[]) {
    if (!this._items) {
      this._items = tabs;
    }
    const bottomNavigationTabs: UITabBarItem[] = this._items.map((tab, index) =>
      UITabBarItem.alloc().initWithTitleImageTag(
        tab.title,
        tab.getNativeIcon(),
        index,
      ),
    );

    this.nativeView.items = bottomNavigationTabs;
    this.nativeView.selectedItem = bottomNavigationTabs[this.selectedTabIndex];
  }

  protected selectTabNative(index: number): void {
    this.nativeView.selectedItem = this.nativeView.items[index];
    this.selectedTabIndex = index;
  }
}
