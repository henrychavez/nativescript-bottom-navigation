import { BottomNavigationBase } from './lib/base/bottom-navigation.base';
import { BottomNavigationTabBase } from './lib/base/bottom-navigation-tab.base';

export {
  TabSelectedEventData,
  TabPressedEventData,
  TabReselectedEventData,
  TitleVisibility,
  TabEvent,
} from './lib/internal/internals';

export declare class BottomNavigation extends BottomNavigationBase {
  selectedTabIndex: number;
  titleVisibility: TitleVisibility;
  activeColor: string;
  inactiveColor: string;
  backgroundColor: Color;
  selectTab(index: number): void;
  showBadge(index: number, value?: number): void;
  removeBadge(index: number): void;
  readonly ios: any;
  readonly android: any;
  readonly items: BottomNavigationTab[];
}

export declare class BottomNavigationTab extends BottomNavigationTabBase {
  title: string;
  icon: string;
  isSelectable: boolean;
}
