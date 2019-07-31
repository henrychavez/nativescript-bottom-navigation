import { BottomNavigation } from '../bottom-navigation';

// Classes shortcuts
const { BottomNavigationView } = com.google.android.material.bottomnavigation;

// Interface shortcuts
declare type OnNavigationItemReselectedListenerType = com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemReselectedListener;

@Interfaces([BottomNavigationView.OnNavigationItemReselectedListener])
export class OnTabReselectedListener extends java.lang.Object
  implements OnNavigationItemReselectedListenerType {
  private _owner: BottomNavigation;

  static initWithOwner(owner: WeakRef<BottomNavigation>) {
    const listener = new OnTabReselectedListener();
    listener._owner = owner.get();
    return listener;
  }

  public onNavigationItemReselected(item: globalAndroid.view.MenuItem): void {
    this._owner._emitTabReselected(item.getItemId());
  }
}
