import { Component, OnInit } from '@angular/core';
import { BottomNavigationTab, BottomNavigation, OnTabSelectedEventData } from "nativescript-bottom-navigation";
import { Page } from "tns-core-modules/ui/page";

@Component({
  moduleId: module.id,
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  public selectedTab: number = 0;
  public tabs: BottomNavigationTab[] = [
    new BottomNavigationTab('First', 'ic_home'),
    new BottomNavigationTab('Second', 'ic_view_list', false),
    new BottomNavigationTab('Third', 'ic_menu')
  ];

  private _bottomNavigation: BottomNavigation;

  constructor(private page: Page) { }

  ngOnInit(): void {
    this._bottomNavigation = this.page.getViewById('bottomNavigation');
  }

  onBottomNavigationTabSelected(args: OnTabSelectedEventData): void {
    this.selectedTab = args.newIndex;
    if (this.selectedTab === 1 ) {
      alert('This item has selectable: false, and should be used to perform actions');
    }
    console.log(`old tab index:  ${args.oldIndex}`);
    console.log(`selected tab index:  ${args.newIndex}`);
  }

}
