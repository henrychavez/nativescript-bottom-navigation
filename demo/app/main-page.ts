import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { BottomNavigation, OnTabSelectedEventData } from "nativescript-bottom-navigation";

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  let page = <pages.Page>args.object;
  page.bindingContext = new HelloWorldModel();
}

export function loaded(args) {
  let bar: BottomNavigation = args.object;
  bar.on('tabSelected', tabSelected);

}

export function tabSelected(args: OnTabSelectedEventData) {
  console.log('tab selected ' + args.newIndex);
}
