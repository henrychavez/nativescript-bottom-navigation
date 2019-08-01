import { BottomNavigation } from './bottom-navigation';

type MDCBottomNavigationBar = any;

export declare class MDCBottomNavigationBarDelegate {}

export class BottomNavigationDelegate extends NSObject {
  static ObjCProtocols = [MDCBottomNavigationBarDelegate];
  private _owner: BottomNavigation;

  static initWithOwner(
    owner: WeakRef<BottomNavigation>,
  ): BottomNavigationDelegate {
    const delegate = <BottomNavigationDelegate>BottomNavigationDelegate.new();
    delegate._owner = owner.get();

    return delegate;
  }

  bottomNavigationBarDidSelectItem(
    navigationBar: MDCBottomNavigationBar,
    item: UITabBarItem,
  ) {
    if (this._owner.selectedTabIndex === item.tag) {
      this._owner._emitTabReselected(item.tag);
      return;
    }

    this._owner._emitTabSelected(item.tag);
  }

  bottomNavigationBarShouldSelectItem(
    bottomNavigationBar: MDCBottomNavigationBar,
    item: UITabBarItem,
  ): boolean {
    const bottomNavigationTab = this._owner.items[item.tag];
    if (!bottomNavigationTab.isSelectable) {
      this._owner._emitTabPressed(item.tag);
    }

    return bottomNavigationTab.isSelectable;
  }
}
