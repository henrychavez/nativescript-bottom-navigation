import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { ItemService } from './item/item.service';
import { ItemsComponent } from './item/items.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { SecondItemComponent } from './second-item/second-item.component';
import { TabsComponent } from './tabs/tabs.component';

import { NativeScriptBottomNavigationModule } from 'nativescript-bottom-navigation/angular';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptBottomNavigationModule,
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    TabsComponent,
    SecondItemComponent,
  ],
  providers: [ItemService],
  exports: [ItemsComponent, SecondItemComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
