import { BottomNavigation } from '../bottom-navigation';

// Classes shortcuts
const { BottomNavigationView } = com.google.android.material.bottomnavigation;

// Interface shortcuts
declare type OnNavigationItemSelectedListenerType = com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemSelectedListener;

@Interfaces([BottomNavigationView.OnNavigationItemSelectedListener])
export class OnTabSelectedListener extends java.lang.Object
  implements OnNavigationItemSelectedListenerType {
  private _owner: BottomNavigation;

  static initWithOwner(owner: WeakRef<BottomNavigation>) {
    const listener = new OnTabSelectedListener();
    listener._owner = owner.get();
    return listener;
  }

  public onNavigationItemSelected(item: android.view.MenuItem): boolean {
    const bottomNavigationTab = this._owner.items[item.getItemId()];

    if (bottomNavigationTab.isSelectable) {
      this._owner._emitTabSelected(item.getItemId());
    } else {
      this._owner._emitTabPressed(item.getItemId());
    }

    return bottomNavigationTab.isSelectable;
  }
}
