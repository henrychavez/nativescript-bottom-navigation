import { BottomNavigationBarBase } from '../base/bottom-navigation-bar.base';
import { BottomNavigationTab } from './bottom-navigation-tab';
export declare class BottomNavigationBar extends BottomNavigationBarBase {
    nativeView: MDCBottomNavigationBar;
    private _delegate;
    readonly ios: MDCBottomNavigationBar;
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
    onLoaded(): void;
    onUnloaded(): void;
    layoutNativeView(left: number, top: number, right: number, bottom: number): void;
    showBadge(index: number, value?: number): void;
    removeBadge(index: number): void;
    protected createTabs(tabs: BottomNavigationTab[] | undefined): void;
    protected selectTabNative(index: number): void;
}
