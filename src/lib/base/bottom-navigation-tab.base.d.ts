import { View, Property } from 'tns-core-modules/ui/core/view';
import { ImageSource } from 'tns-core-modules/image-source';
interface BottomNavigationTabProps {
    title: string;
    icon: string | ImageSource;
    isSelectable?: boolean;
}
export declare abstract class BottomNavigationTabBase extends View implements BottomNavigationTabProps {
    title: string;
    icon: string | ImageSource;
    isSelectable?: boolean;
    constructor(args?: BottomNavigationTabProps);
    abstract getNativeIcon(): any;
}
export declare const isSelectableProperty: Property<BottomNavigationTabBase, boolean>;
export declare const iconProperty: Property<BottomNavigationTabBase, ImageSource>;
export {};
