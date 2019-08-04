import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {
  BottomNavigationTab,
  BottomNavigation,
  TabPressedEventData,
  TabSelectedEventData,
  TabReselectedEventData,
  TitleVisibility,
} from 'nativescript-bottom-navigation';

@Component({
  moduleId: module.id,
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements AfterViewInit {
  // public tabs: BottomNavigationTab[] = [
  //   new BottomNavigationTab({ title: 'First', icon: 'res://ic_home' }),
  //   new BottomNavigationTab({
  //     title: 'List',
  //     icon: 'res://ic_view_list',
  //     isSelectable: false,
  //   }),
  //   new BottomNavigationTab({
  //     title: 'List',
  //     icon: 'res://ic_view_list',
  //   }),
  //   new BottomNavigationTab({ title: 'Third', icon: 'res://ic_menu' }),
  // ];

  @ViewChild('bottomNavigation', { read: ElementRef, static: false })
  _bottomNavigation: ElementRef<BottomNavigation>;

  ngAfterViewInit(): void {
    const bottomNavigation = this._bottomNavigation.nativeElement;
    setTimeout(() => {
      bottomNavigation.titleVisibility = TitleVisibility.Always;
      bottomNavigation.selectTab(2);
      bottomNavigation.showBadge(0);
      bottomNavigation.showBadge(1, 2);
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
