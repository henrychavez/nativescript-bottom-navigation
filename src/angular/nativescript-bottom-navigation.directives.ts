import { Directive, Input } from "@angular/core";

@Directive(
  {
    selector: "BottomNavigation"
  }
)
export class BottomNavigationDirective {
  @Input() activeColor: string;
  @Input() inactiveColor: string;
  @Input() backgroundColor: string;
  @Input() tabs: any[];
}

@Directive(
  {
    selector: "BottomNavigationTab"
  }
)
export class BottomNavigationTabDirective {
  @Input() title: string;
  @Input() icon: string;
}

export const DIRECTIVES = [BottomNavigationDirective, BottomNavigationTabDirective];