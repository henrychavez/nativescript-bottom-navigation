import { BottomNavigationBar } from '../bottom-navigation-bar';
declare type OnNavigationItemReselectedListenerType = com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemReselectedListener;
export declare class OnTabReselectedListener extends java.lang.Object implements OnNavigationItemReselectedListenerType {
    private _owner;
    static initWithOwner(owner: WeakRef<BottomNavigationBar>): OnTabReselectedListener;
    onNavigationItemReselected(item: globalAndroid.view.MenuItem): void;
}
export {};
