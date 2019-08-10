# Nativescript Material Bottom Navigation Bar

Nativescript plugin for Android & iOS to have the Bottom Navigation Bar following the Material Design Guidelines.

[![npm](https://img.shields.io/npm/v/nativescript-bottom-navigation.svg)](https://www.npmjs.com/package/nativescript-bottom-navigation) [![npm](https://img.shields.io/npm/dt/nativescript-bottom-navigation.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-bottom-navigation) [![Build Status](https://travis-ci.org/henrychavez/nativescript-bottom-navigation.svg?branch=master)](https://travis-ci.org/henrychavez/nativescript-bottom-navigation)

> **IMPORTANT:** This package will be deprecated, this is the last release on this repository, the component will be moved to [nativescript-material-components](https://github.com/Akylas/nativescript-material-components)

<img alt="iOS" src="screenshots/screenshot-ios.png" width="250">

## Contents

1.  [Installation](#installation)
2.  [Usage with Javascript](#usage)
3.  [Usage with Angular](#angular)
4.  [Usage with Vue](#vue)
5.  [Css Styling](#css-styling)
6.  [API](#api)

### Prerequisites / Requirements

You need the version of NS6 or later to use this plugin.

### Installation

```javascript
tns plugin add nativescript-bottom-navigation
```

if you want to use the plugin with NS5 and above use the version `1.5.1`

```javascript
tns plugin add nativescript-bottom-navigation@1.5.1
```

### BREAKING CHANGES

- `BottomNavigation` class now is `BottomNavigationBar`
- `NativescriptBottomNavigationModule` now is `NativeScriptBottomNavigationBarModule`
- `res://` should be used to reference icons in the tabs
- The prefix `On` of the Event interfaces was removed:
  - Example: `OnTabPressedEventData` now is `TabPressedEventData`
- The prefix `tab` of Css properties was removed:
  - Example: `tab-active-color` now is `active-color`
- **The documentation was updated review it :D**

### NEW FEATURES

- `Badge` now are supported using the method: `showBadge(index, value)`
  - NOTE: if you want to show a badge as a red dot no value should be passed to the function.

### Usage

Before start using the plugin you need to add the icons for android & iOS in your `App_Resources` directory.

#### XML

You can set the tabs using the `tabs` property

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:mdc="nativescript-bottom-navigation"
      loaded="pageLoaded"
      class="page">
    <GridLayout rows="*, auto">
        <StackLayout row="0">
            <Label text="content"></Label>
        </StackLayout>
        <mdc:BottomNavigationBar
          tabs="{{ tabs }}"
          activeColor="green"
          inactiveColor="red"
          backgroundColor="black"
          tabSelected="tabSelected"
          row="1"
        ></mdc:BottomNavigationBar>
    </GridLayout>
</Page>
```

```typescript
import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import {
  BottomNavigationTab,
  TabSelectedEventData,
} from 'nativescript-bottom-navigation';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: EventData) {
  // Get the event sender
  let page = <Page>args.object;
  page.bindingContext = {
    tabs: [
      new BottomNavigationTab({ title: 'First', icon: 'res://ic_home' }),
      new BottomNavigationTab({
        title: 'Second',
        icon: 'res://ic_view_list',
        isSelectable: false,
      }),
      new BottomNavigationTab({ title: 'Third', icon: 'res://ic_menu' }),
    ],
  };
}

export function tabSelected(args: TabSelectedEventData) {
  console.log('tab selected ' + args.newIndex);
}
```

or you can add the tabs directly in your xml view

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:mdc="nativescript-bottom-navigation"
      loaded="pageLoaded"
      class="page">
    <GridLayout rows="*, auto">
        <StackLayout row="0">
            <Label text="content"></Label>
        </StackLayout>
        <mdc:BottomNavigationBar
          activeColor="green"
          inactiveColor="red"
          backgroundColor="black"
          tabSelected="tabSelected"
          row="1"
        >
          <mdc:BottomNavigationTab title="First" icon="res://ic_home" />
          <mdc:BottomNavigationTab title="Second" icon="res://ic_view_list" isSelectable="false" />
          <mdc:BottomNavigationTab title="Third" icon="res://ic_menu" />
        </mdc:BottomNavigationBar>
    </GridLayout>
</Page>
```

#### Angular

First you need to include the `NativeScriptBottomNavigationBarModule` in your `app.module.ts``

```typescript
import { NativeScriptBottomNavigationBarModule} from "nativescript-bottom-navigation/angular";

@NgModule({
    imports: [
        NativeScriptBottomNavigationBarModule
    ],
    ...
})
```

```html
<GridLayout rows="*, auto">
  <StackLayout row="0">
    <label text="content"></label>
  </StackLayout>
  <BottomNavigationBar
    [tabs]="tabs"
    activeColor="red"
    inactiveColor="yellow"
    backgroundColor="black"
    (tabSelected)="onBottomNavigationTabSelected($event)"
    (tabPressed)="onBottomNavigationTabPressed($event)"
    row="1"
  ></BottomNavigationBar>
</GridLayout>
```

or you can declare the `BottomNavigationTab` in your html directly

```html
<GridLayout rows="*, auto">
  <StackLayout row="0">
    <label text="content"></label>
  </StackLayout>
  <BottomNavigationBar
    activeColor="red"
    inactiveColor="yellow"
    backgroundColor="black"
    (tabSelected)="onBottomNavigationTabSelected($event)"
    (tabPressed)="onBottomNavigationTabPressed($event)"
    row="1"
  >
    <BottomNavigationTab
      title="First"
      icon="res://ic_home"
    ></BottomNavigationTab>
    <BottomNavigationTab
      title="Second"
      icon="res://ic_view_list"
      [isSelectable]="false"
    ></BottomNavigationTab>
    <BottomNavigationTab
      title="Third"
      icon="res://ic_menu"
    ></BottomNavigationTab>
  </BottomNavigationBar>
</GridLayout>
```

#### Vue

If you want to use this plugin with Vue, do this in your `app.js` or `main.js`:

```javascript
import BottomNavigationBar from 'nativescript-bottom-navigation/vue';

Vue.use(BottomNavigationBar);
```

This will install and register `BottomNavigationBar` and `BottomNavigationTab` components to your `Vue` instance and now you can use the plugin as follows:

```html
<GridLayout rows="*, auto">
  <StackLayout row="0">
    <label text="content"></label>
  </StackLayout>
  <BottomNavigationBar
    activeColor="red"
    inactiveColor="yellow"
    backgroundColor="black"
    @tabSelected="onBottomNavigationTabSelected"
    row="1"
  >
    <BottomNavigationTab title="First" icon="ic_home" />
    <BottomNavigationTab
      title="Second"
      icon="ic_view_list"
      isSelectable="false"
    />
    <BottomNavigationTab title="Third" icon="ic_menu" />
  </BottomNavigationBar>
</GridLayout>
```

You can find more information of how to use nativescript plugins with Vue [Here!](https://nativescript-vue.org/en/docs/getting-started/nativescript-plugins/)

#### CSS Styling

You can also use your css file to set or change the `activeColor`, `inactiveColor` & `backgroundColor` of the Bottom Navigation Bar.

```css
.botom-nav {
  active-color: green;
  inactive-color: black;
  background-color: blue;
}
```

## API

1. [BottomNavigationBar](#bottom-navigation-bar)
2. [BottomNavigationTab](#bottom-navigation-tab)

- **Properties (bindable):** Properties settable through XML/HTML
- **Properties (internal):** Properties accessible through JS/TS instance
- **Events:** Event properties settable thew XML/HTML

# Bottom Navigation Bar

#### Properties (bindable)

| Property        | Required | Default                     | Type                         | Description                                             |
| --------------- | -------- | --------------------------- | ---------------------------- | ------------------------------------------------------- |
| tabs            | true     | []                          | `Array<BottomNavigationTab>` | Array containing the tabs for the BottomNavigationBar   |
| titleVisibility | false    | `TitleVisibility.Selected` | `TitleVisibility`            | Title Visibility for each BottomNavigationTab           |
| activeColor     | false    | "black"                     | `String`                     | Color of the BottomNavigationTab when it's selected     |
| inactiveColor   | false    | "gray"                      | `String`                     | Color of the BottomNavigationTab when it's not selected |
| backgroundColor | false    | "white"                     | `String`                     | Color of the BottomNavigation background                |

#### Properties (internal)

| Property         | Default                     | Type              | Description                                             |
| ---------------- | --------------------------- | ----------------- | ------------------------------------------------------- |
| selectedTabIndex | 0                           | `Number`          | Index of the selected tab                               |
| titleVisibility  | `TitleVisibility.Selected` | `TitleVisibility` | Title Visibility for each BottomNavigationTab           |
| activeColor      | "black"                     | `String`          | Color of the BottomNavigationTab when it's selected     |
| inactiveColor    | "gray"                      | `String`          | Color of the BottomNavigationTab when it's not selected |
| backgroundColor  | "white"                     | `String`          | Color of the BottomNavigation background                |

#### Events

| Name          | Type                                   | Description                                                              |
| ------------- | -------------------------------------- | ------------------------------------------------------------------------ |
| tabPressed    | `(args: TabPressedEventData): void`    | Function fired every time the user tap a tab with `isSelectable: false`  |
| tabSelected   | `(args: TabSelectedEventData): void`   | Function fired every time the user select a new tab                      |
| tabReselected | `(args: TabReselectedEventData): void` | Function fired every time the user select a tab that is already selected |

#### Methods

| Property                                   | Type   | Description                      |
| ------------------------------------------ | ------ | -------------------------------- |
| `selectTab(index: number)`                 | `void` | Select a tab programmatically    |
| `showBadge(index: number, value?: number)` | `void` | Show a badge for an specific tab |

# Bottom Navigation Tab

#### Properties (bindable)

| Property     | Required | Default | Type      | Description                                 |
| ------------ | -------- | ------- | --------- | ------------------------------------------- |
| title        | true     | null    | `string`  | Title of the tab                            |
| icon         | true     | null    | `string`  | Icon of the tab                             |
| isSelectable | false    | true    | `boolean` | Determine if the tab can be selected or not |
