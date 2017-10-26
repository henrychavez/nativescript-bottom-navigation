import { Component, OnInit } from "@angular/core";
import { Item } from "./item";
import { ItemService } from "./item.service";
import { BottomNavigation, BottomNavigationTab, OnTabSelectedEventData } from 'nativescript-bottom-navigation';
import { Page } from 'tns-core-modules/ui/page';

@Component(
  {
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
  }
)
export class ItemsComponent implements OnInit {

  public items: Item[];
  public tabs: BottomNavigationTab[] = [
    new BottomNavigationTab('First', 'ic_home'),
    new BottomNavigationTab('Second', 'ic_view_list'),
    new BottomNavigationTab('Third', 'ic_menu')
  ];

  private _bottomNavigation: BottomNavigation;

  // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
  // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
  constructor(private itemService: ItemService,
              private page: Page) { }

  ngOnInit(): void {
    this._bottomNavigation = this.page.getViewById('bottomNavigation');

    this.items = this.itemService.getItems();
  }

  onBottomNavigationTabSelected(args: OnTabSelectedEventData): void {
    console.log(`old tab index:  ${args.oldIndex}`);
    console.log(`selected tab index:  ${args.newIndex}`);
  }
}