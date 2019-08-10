import { BottomNavigationBar } from '../bottom-navigation-bar';
declare type OnNavigationItemSelectedListenerType = com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemSelectedListener;
export declare class OnTabSelectedListener extends java.lang.Object implements OnNavigationItemSelectedListenerType {
    private _owner;
    static initWithOwner(owner: WeakRef<BottomNavigationBar>): OnTabSelectedListener;
    onNavigationItemSelected(item: android.view.MenuItem): boolean;
}
export {};
