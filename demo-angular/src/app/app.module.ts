import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptBottomNavigationBarModule } from 'nativescript-bottom-navigation/angular';

import { TabsComponent } from './tabs/tabs.component';
import { FirstTabComponent } from './first-tab/first-tab.component';
import { ThirdTabComponent } from './third-tab/third-tab.component';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptBottomNavigationBarModule,
  ],
  declarations: [
    AppComponent,
    TabsComponent,
    FirstTabComponent,
    ThirdTabComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
