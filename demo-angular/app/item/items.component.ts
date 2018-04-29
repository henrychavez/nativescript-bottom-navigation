import { Component, OnInit } from "@angular/core";
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component(
  {
    selector: "ItemsComponent",
    moduleId: module.id,
    templateUrl: "./items.component.html",
  }
)
export class ItemsComponent implements OnInit {

  public items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }
}