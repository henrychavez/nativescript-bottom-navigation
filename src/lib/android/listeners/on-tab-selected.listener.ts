import { BottomNavigationBar } from '../bottom-navigation-bar';

// Types shortcuts
declare type OnNavigationItemSelectedListener = com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemSelectedListener;

interface OnTabSelectedlistener {
  new (owner: BottomNavigationBar): OnNavigationItemSelectedListener;
}

let OnTabSelectedlistener: OnTabSelectedlistener;

export const getOnTabSelectedlistener = () => {
  if (OnTabSelectedlistener) {
    return OnTabSelectedlistener;
  }

  @Interfaces([
    com.google.android.material.bottomnavigation.BottomNavigationView
      .OnNavigationItemSelectedListener,
  ])
  class OnTabSelectedlistenerImpl extends java.lang.Object
    implements OnNavigationItemSelectedListener {
    constructor(public owner: BottomNavigationBar) {
      super();

      // necessary when extending TypeScript constructors
      return global.__native(this);
    }

    public onNavigationItemSelected(
      menuItem: globalAndroid.view.MenuItem,
    ): boolean {
      const bottomNavigationTab = this.owner.items[menuItem.getItemId()];

      if (bottomNavigationTab.isSelectable) {
        this.owner._emitTabSelected(menuItem.getItemId());
      } else {
        this.owner._emitTabPressed(menuItem.getItemId());
      }

      return bottomNavigationTab.isSelectable;
    }
  }

  OnTabSelectedlistener = OnTabSelectedlistenerImpl;

  return OnTabSelectedlistener;
};
