import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";
import { BottomNavigation, BottomNavigationTab } from '../';
import { isBlank } from 'nativescript-angular/lang-facade';

@Directive(
  {
    selector: "BottomNavigation"
  }
)
export class BottomNavigationDirective implements AfterViewInit {

  public bottomNavigation: BottomNavigation;
  private _viewInitialized: boolean;

  constructor(element: ElementRef) {
    this.bottomNavigation = element.nativeElement;
  }

  private _activeColor: string;

  @Input()
  get activeColor(): string {
    return this._activeColor;
  }

  set activeColor(value: string) {
    this._activeColor = value;
    if (this._viewInitialized) {
      this.bottomNavigation.activeColor = this._activeColor;
    }
  }

  private _inactiveColor: string;

  @Input()
  get inactiveColor(): string {
    return this._inactiveColor;
  }

  set inactiveColor(value: string) {
    this._inactiveColor = value;
    if (this._viewInitialized) {
      this.bottomNavigation.inactiveColor = this._inactiveColor;
    }
  }

  private _backgroundColor: string;

  @Input()
  get backgroundColor(): string {
    return this._backgroundColor;
  }

  set backgroundColor(value: string) {
    this._backgroundColor = value;
    if (this._viewInitialized) {
      this.bottomNavigation.backgroundColor = this._backgroundColor;
    }
  }

  private _tabs: BottomNavigationTab[];

  @Input()
  get tabs(): BottomNavigationTab[] {
    return this._tabs;
  }

  set tabs(value: BottomNavigationTab[]) {
    this._tabs = value;
    if (this._viewInitialized) {
      this.bottomNavigation.tabs = this._tabs;
    }
  }

  private _selectedTabIndex: number;

  @Input()
  get selectedTabIndex(): number {
    return this._selectedTabIndex;
  }

  set selectedTabIndex(value: number) {
    this._selectedTabIndex = value;
    if (this._viewInitialized) {
      this.bottomNavigation.selectedTabIndex = this._selectedTabIndex;
    }
  }

  ngAfterViewInit(): void {
    this._viewInitialized = true;
    if (!isBlank(this._activeColor)) { this.bottomNavigation.activeColor = this._activeColor; }
    if (!isBlank(this._inactiveColor)) { this.bottomNavigation.inactiveColor = this._inactiveColor; }
    if (!isBlank(this._backgroundColor)) { this.bottomNavigation.backgroundColor = this._backgroundColor; }
    if (!isBlank(this._tabs)) { this.bottomNavigation.tabs = this._tabs; }
    if (!isBlank(this._selectedTabIndex)) { this.bottomNavigation.selectedTabIndex = this._selectedTabIndex; }
  }
}

@Directive(
  {
    selector: "BottomNavigationTab"
  }
)
export class BottomNavigationTabDirective {

  private _title: string;

  @Input()
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  private _icon: string;

  @Input()
  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  @Input()
  private _selectable: boolean;

  get selectable(): boolean {
    return this._selectable;
  }

  set selectable(value: boolean) {
    this._selectable = value;
  }
}

export const DIRECTIVES = [BottomNavigationDirective, BottomNavigationTabDirective];
