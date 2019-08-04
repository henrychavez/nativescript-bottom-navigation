import { Component } from '@angular/core';

@Component({
  selector: 'ns-app',
  moduleId: module.id,
  template: `
    <page-router-outlet actionBarVisibility="never"></page-router-outlet>
  `,
})
export class AppComponent {}
