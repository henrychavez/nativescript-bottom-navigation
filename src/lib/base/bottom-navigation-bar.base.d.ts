import { View, AddChildFromBuilder, Color, Property, CssProperty, Style } from 'tns-core-modules/ui/core/view';
import { TitleVisibility } from '../internal/internals';
import { BottomNavigationTabBase } from './bottom-navigation-tab.base';
export declare abstract class BottomNavigationBarBase extends View implements AddChildFromBuilder {
    static tabPressedEvent: string;
    static tabSelectedEvent: string;
    static tabReselectedEvent: string;
    selectedTabIndex: number;
    titleVisibility: TitleVisibility;
    protected _items: BottomNavigationTabBase[];
    readonly items: BottomNavigationTabBase[];
    inactiveColor: Color;
    activeColor: Color;
    backgroundColor: Color;
    selectTab(index: number): void;
    _emitTabPressed(index: number): void;
    _emitTabSelected(index: number): void;
    _emitTabReselected(index: number): void;
    _addChildFromBuilder(name: string, value: BottomNavigationTabBase): void;
    abstract showBadge(index: number, value?: number): void;
    abstract removeBadge(index: number): void;
    protected abstract selectTabNative(index: number): void;
    protected abstract createTabs(tabs: BottomNavigationTabBase[]): void;
}
export declare const tabsProperty: Property<BottomNavigationBarBase, BottomNavigationTabBase[]>;
export declare const titleVisibilityProperty: Property<BottomNavigationBarBase, TitleVisibility>;
export declare const activeColorCssProperty: CssProperty<Style, Color>;
export declare const inactiveColorCssProperty: CssProperty<Style, Color>;
