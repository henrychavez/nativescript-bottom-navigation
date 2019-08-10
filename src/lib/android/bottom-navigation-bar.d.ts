import { BottomNavigationBarBase } from '../base/bottom-navigation-bar.base';
import { BottomNavigationTab } from './bottom-navigation-tab';
export declare class BottomNavigationBar extends BottomNavigationBarBase {
    nativeView: com.google.android.material.bottomnavigation.BottomNavigationView;
    readonly android: com.google.android.material.bottomnavigation.BottomNavigationView;
    createNativeView(): com.google.android.material.bottomnavigation.BottomNavigationView;
    initNativeView(): void;
    showBadge(index: number, value?: number): void;
    removeBadge(index: number): void;
    protected createTabs(tabs?: BottomNavigationTab[]): void;
    protected selectTabNative(index: number): void;
    private setActiveColor;
    private setInactiveColor;
}
