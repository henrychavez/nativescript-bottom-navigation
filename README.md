# Nativescript Bottom Navigation

Nativescript plugin for Android & iOS to have the Bottom Navigation bar.

[![npm](https://img.shields.io/npm/v/nativescript-bottom-navigation.svg)](https://www.npmjs.com/package/nativescript-bottom-navigation) [![npm](https://img.shields.io/npm/dt/nativescript-bottom-navigation.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-bottom-navigation) [![Build Status](https://travis-ci.org/henrychavez/nativescript-bottom-navigation.svg?branch=master)](https://travis-ci.org/henrychavez/nativescript-bottom-navigation)


<img alt="iOS" src="screenshots/screenshot-ios.png" width="250">

## Prerequisites / Requirements

You need the version of NS3 to use this plugin.

## Installation

```javascript
tns plugin add nativescript-bottom-navigation
```

## Usage 

Before start using the plugin you need to add the icons for android & iOS in your App_Resources directory.

#### XML

You can set the tabs using the `tabs` property

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:bottomNav="nativescript-bottom-navigation"
      loaded="pageLoaded"
      class="page">
    <GridLayout columns="*"
                rows="*, auto">
        <StackLayout row="0">
            <Label text="content"></Label>
        </StackLayout>
        <bottomNav:BottomNavigation tabs="{{ tabs }}"
                                    activeColor="green"
                                    inactiveColor="red"
                                    backgroundColor="black"
                                    keyLineColor="black"
                                    loaded="bottomNavigationLoaded"
                                    row="1"></bottomNav:BottomNavigation>
    </GridLayout>
</Page>
```

```javascript
import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { BottomNavigation, BottomNavigationTab, OnTabSelectedEventData } from "nativescript-bottom-navigation";

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  let page = <pages.Page>args.object;
  page.bindingContext = {
      tabs: [
        new BottomNavigationTab('First', 'ic_home'),
        new BottomNavigationTab('Second', 'ic_view_list'),
        new BottomNavigationTab('Third', 'ic_menu')
      ]
  };
}

export function bottomNavigationLoaded(args) {
  let bottomNavigation: BottomNavigation = args.object;
  // For some reason the tabSelected event doesn't work if you
  // handle it from the view, so you need to handle the event in this way.
  bottomNavigation.on('tabSelected', tabSelected);

}

export function tabSelected(args: OnTabSelectedEventData) {
  console.log('tab selected ' + args.newIndex);
}

```

or you can add the tabs directly in your xml view

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:bottomNav="nativescript-bottom-navigation"
      loaded="pageLoaded"
      class="page">
    <GridLayout columns="*"
                rows="*, auto">
        <StackLayout row="0">
            <Label text="content"></Label>
        </StackLayout>
        <bottomNav:BottomNavigation activeColor="green"
                                    inactiveColor="red"
                                    backgroundColor="black"
                                    keyLineColor="black"
                                    loaded="bottomNavigationLoaded"
                                    row="1">
            <bottomNav:BottomNavigationTab title="First" icon="ic_home"></bottomNav:BottomNavigationTab>
            <bottomNav:BottomNavigationTab title="Second" icon="ic_view_list"></bottomNav:BottomNavigationTab>
            <bottomNav:BottomNavigationTab title="Third" icon="ic_menu"></bottomNav:BottomNavigationTab>
        </bottomNav:BottomNavigation>
    </GridLayout>
</Page>
```

```javascript
import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { BottomNavigation, BottomNavigationTab, OnTabSelectedEventData } from "nativescript-bottom-navigation";

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  let page = <pages.Page>args.object;
}

export function bottomNavigationLoaded(args) {
  let bottomNavigation: BottomNavigation = args.object;
  bottomNavigation.on('tabSelected', tabSelected);

}

export function tabSelected(args: OnTabSelectedEventData) {
  console.log('tab selected ' + args.newIndex);
}

```

#### Angular

First you need to include the `NativescriptBottomNavigationModule` in your app.module.ts

```javascript
import { NativescriptBottomNavigationModule} from "nativescript-bottom-navigation/angular";

@NgModule({
    imports: [
        NativescriptBottomNavigationModule
    ],
    ...
})
```

As the examples in the Javascript/Typescript version you can use the `tabs` property to set the BottomNavigationTabs

```xml
<GridLayout rows="*, auto">
    <StackLayout row="0">
       <Label text="content"></Label>
    </StackLayout>
    <BottomNavigation [tabs]="tabs"
                      activeColor="red"
                      inactiveColor="yellow"
                      backgroundColor="black"
                      keyLineColor="black"
                      (tabSelected)="onBottomNavigationTabSelected($event)"
                      row="1"></BottomNavigation>
</GridLayout>
```

or you can declare the BottomNavigationTabs in your html directly

```xml
<GridLayout rows="*, auto">
    <StackLayout row="0">
       <Label text="content"></Label>
    </StackLayout>
    <BottomNavigation activeColor="red"
                      inactiveColor="yellow"
                      backgroundColor="black"
                      keyLineColor="black"
                      (tabSelected)="onBottomNavigationTabSelected($event)"
                      row="1">
        <BottomNavigationTab title="First" icon="ic_home"></BottomNavigationTab>
        <BottomNavigationTab title="Second" icon="ic_view_list"></BottomNavigationTab>
        <BottomNavigationTab title="Third" icon="ic_menu"></BottomNavigationTab>
    </BottomNavigation>
</GridLayout>
```

```javascript
import { Component, OnInit } from "@angular/core";
import { BottomNavigation, BottomNavigationTab, OnTabSelectedEventData } from 'nativescript-bottom-navigation';

@Component(
  {
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
  }
)
export class AppComponent {

  public tabs: BottomNavigationTab[] = [
    new BottomNavigationTab('First', 'ic_home'),
    new BottomNavigationTab('Second', 'ic_view_list'),
    new BottomNavigationTab('Third', 'ic_menu')
  ];

  onBottomNavigationTabSelected(args: OnTabSelectedEventData): void {
    console.log(`Tab selected:  ${args.oldIndex}`);
  }
}
```

#### CSS Styling

You can also use your css file to set or change the activeColor, inactiveColor & backgroundColor of the Bottom Navigation.

```css
.botom-nav {
    tab-active-color: green;
    tab-inactive-color: black;
    tab-background-color: blue;
    tab-keyline-color: blue;
}
```

## API

1. [BottomNavigation](#bottom-navigation)
2. [BottomNavigationTab](#bottom-navigation-tab)

** properties (bindable) = properties settable thew XML/HTML
** properties (internal) = properties settable thew JS/TS instance

# Bottom Navigation

#### Properties (bindable)

| Property | Required | Default | Type | Description |
| --- | --- | --- | --- | --- |
| tabs | true | null | `Array<BottomNavigationTab>` | Array containing the tabs for the BottomNavigation |
| activeColor | false | "blue" | `String` | Color of the BottomNavigationTab when it's selected  |
| inactiveColor | false | "gray" | `String` | Color of the BottomNavigationTab when it's not selected  |
| backgroundColor | false | "white" | `String` | Color of the BottomNavigation background  |
| keyLineColor | false | "#eeeeee" | `String` | Color of the BottomNavigation keyLine (Top border)  |

#### Properties (internal)

| Property | Required | Default | Type | Description |
| --- | --- | --- | --- | --- |
| selectedTabIndex | true | 0 | `Number` | Index of the selected tab |

#### Methods

| Property | Type | Description |
| --- | --- | --- |
| `selectTab(index: number)` | `Void` | Select a tab programmatically |
| `createTabs(tabs: BottomNavigationTab[])` | `Void` | Create the tabs programmatically |

# Bottom Navigation Tab

#### Properties (internal)

| Property | Required | Default | Type | Description |
| --- | --- | --- | --- | --- |
| title | true | null | `String` | Title of the tab |
| icon | true | null | `String` | Icon of the tab  |
| selectable | false | true | `Boolean` | Determine if the tab can be selected or not (The `tabSelected` event still be fired)  |
