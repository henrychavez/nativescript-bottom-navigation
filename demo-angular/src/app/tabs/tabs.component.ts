import { Component, OnInit } from '@angular/core';
import {
  BottomNavigationTab,
  BottomNavigation,
  OnTabPressedEventData,
  OnTabSelectedEventData,
  OnTabReselectedEventData
} from "nativescript-bottom-navigation";
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

  onBottomNavigationTabPressed(args: OnTabPressedEventData): void {
    alert('This item has selectable: false, and should be used to perform actions');
    console.log(`pressed tab index:  ${args.index}`);
  }

  onBottomNavigationTabSelected(args: OnTabSelectedEventData): void {
    console.log(`old tab index:  ${args.oldIndex}`);
    console.log(`selected tab index:  ${args.newIndex}`);
  }

  onBottomNavigationTabReselected(args: OnTabReselectedEventData): void {
    alert('Tab Reselected');
    console.log(`reselected tab index:  ${args.index}`);
  }

}
