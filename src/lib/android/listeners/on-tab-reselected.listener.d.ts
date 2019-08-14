import { BottomNavigationBar } from '../bottom-navigation-bar';
declare type OnNavigationItemReselectedListener = com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemReselectedListener;
interface OnTabReselectedListener {
    new (owner: BottomNavigationBar): OnNavigationItemReselectedListener;
}
declare let OnTabReselectedListener: OnTabReselectedListener;
export declare const getOnTabReselectedListener: () => OnTabReselectedListener;
export {};
