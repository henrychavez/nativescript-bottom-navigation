import { Component, OnInit } from '@angular/core';
import {
  BottomNavigationTab,
  BottomNavigation,
  TabPressedEventData,
  TabSelectedEventData,
  TabReselectedEventData,
} from 'nativescript-bottom-navigation';
import { Page } from 'tns-core-modules/ui/page';

@Component({
  moduleId: module.id,
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  public selectedTab: number = 0;
  public tabs: BottomNavigationTab[] = [
    new BottomNavigationTab({ title: 'First', icon: 'res://ic_home' }),
    new BottomNavigationTab({
      title: 'List',
      icon: 'res://ic_view_list',
      isSelectable: false,
    }),
    new BottomNavigationTab({
      title: 'List',
      icon: 'res://ic_view_list',
    }),
    new BottomNavigationTab({ title: 'Third', icon: 'res://ic_menu' }),
  ];

  private _bottomNavigation: BottomNavigation;

  constructor(private page: Page) {}

  ngOnInit(): void {
    this._bottomNavigation = this.page.getViewById('bottomNavigation');
    setTimeout(() => {
      console.log('printing tabs readonly', this._bottomNavigation.items);

      const badge = this._bottomNavigation['showBadge'](0);
      badge.setNumber(2);
    }, 3000);
  }

  onBottomNavigationTabPressed(args: TabPressedEventData): void {
    alert(
      'This item has selectable: false, and should be used to perform actions',
    );
    console.log(`pressed tab index:  ${args.index}`);
  }

  onBottomNavigationTabSelected(args: TabSelectedEventData): void {
    console.log(`old tab index:  ${args.oldIndex}`);
    console.log(`selected tab index:  ${args.newIndex}`);
  }

  onBottomNavigationTabReselected(args: TabReselectedEventData): void {
    alert('Tab Reselected');
    console.log(`reselected tab index:  ${args.index}`);
  }
}
