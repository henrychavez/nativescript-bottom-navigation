import { BottomNavigationBar } from '../bottom-navigation-bar';
declare type OnNavigationItemSelectedListener = com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemSelectedListener;
interface OnTabSelectedlistener {
    new (owner: BottomNavigationBar): OnNavigationItemSelectedListener;
}
declare let OnTabSelectedlistener: OnTabSelectedlistener;
export declare const getOnTabSelectedlistener: () => OnTabSelectedlistener;
export {};
