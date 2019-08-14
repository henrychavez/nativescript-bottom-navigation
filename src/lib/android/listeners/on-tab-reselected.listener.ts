import { BottomNavigationBar } from '../bottom-navigation-bar';

// Types shortcuts
declare type OnNavigationItemReselectedListener = com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemReselectedListener;

interface OnTabReselectedListener {
  new (owner: BottomNavigationBar): OnNavigationItemReselectedListener;
}

let OnTabReselectedListener: OnTabReselectedListener;

export const getOnTabReselectedListener = () => {
  if (OnTabReselectedListener) {
    return OnTabReselectedListener;
  }
  @Interfaces([
    com.google.android.material.bottomnavigation.BottomNavigationView
      .OnNavigationItemReselectedListener,
  ])
  class OnTabReselectedListenerImpl extends java.lang.Object
    implements OnNavigationItemReselectedListener {
    constructor(public owner: BottomNavigationBar) {
      super();

      // necessary when extending TypeScript constructors
      return global.__native(this);
    }

    public onNavigationItemReselected(
      menuItem: globalAndroid.view.MenuItem,
    ): void {
      this.owner._emitTabReselected(menuItem.getItemId());
    }
  }

  OnTabReselectedListener = OnTabReselectedListenerImpl;

  return OnTabReselectedListener;
};
