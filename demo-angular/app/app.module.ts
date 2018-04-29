import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativescriptBottomNavigationModule } from "nativescript-bottom-navigation/angular";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ItemService } from "./item/item.service";
import { SecondItemComponent } from './second-item/second-item.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondItemComponent,
    ItemsComponent,
    TabsComponent,
    ItemDetailComponent,
],
  providers: [
    ItemService,
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptCommonModule,
    AppRoutingModule,
    NativescriptBottomNavigationModule,
  ],
  exports: [ItemsComponent, SecondItemComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
