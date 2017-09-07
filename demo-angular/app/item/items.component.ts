import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { BottomNavigation, OnTabSelectedEventData } from 'nativescript-bottom-navigation';

@Component(
  {
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
  }
)
export class ItemsComponent implements OnInit {

  items: Item[];
  private _bottomNavigation: BottomNavigation;

  // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
  // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  onBottomNavigationLoaded(args): void {
    this._bottomNavigation = <BottomNavigation>args.object;
  }

  onBottomNavigationTabSelected(args: OnTabSelectedEventData): void {
    console.log(`old tab index:  ${args.oldIndex}`);
    console.log(`selected tab index:  ${this._bottomNavigation.selectedTabIndex}`);
  }
}