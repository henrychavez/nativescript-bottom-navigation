import { BottomNavigationBar } from './bottom-navigation-bar';
declare type MDCBottomNavigationBar = any;
export declare class MDCBottomNavigationBarDelegate {
}
export declare class BottomNavigationBarDelegate extends NSObject {
    static ObjCProtocols: (typeof MDCBottomNavigationBarDelegate)[];
    private _owner;
    static initWithOwner(owner: WeakRef<BottomNavigationBar>): BottomNavigationBarDelegate;
    bottomNavigationBarDidSelectItem(navigationBar: MDCBottomNavigationBar, item: UITabBarItem): void;
    bottomNavigationBarShouldSelectItem(bottomNavigationBar: MDCBottomNavigationBar, item: UITabBarItem): boolean;
}
export {};
