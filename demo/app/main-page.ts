import {
    BottomNavigation,
    OnTabReselectedEventData,
    OnTabSelectedEventData,
    OnTabPressedEventData,
} from 'nativescript-bottom-navigation';

let bar: BottomNavigation;

const tabSelected = (args: OnTabSelectedEventData) => {
    console.log('tab selected:', args.newIndex);
};

const tabReselected = (args: OnTabReselectedEventData) => {
    console.log('tab reselected:', args.index);
    alert('tab reselected');
};

const tabPressed = (args: OnTabPressedEventData) => {
    console.log('tab pressed:', args.index);
    alert('This item has selectable: false, and should be used to perform actions.');
};

export const loaded = (args) => {
    bar = args.object as BottomNavigation;
    bar.on('tabSelected', tabSelected);
    bar.on('tabPressed', tabPressed);
    bar.on('tabReselected', tabReselected);
};

export const changeBackground = () => {
    bar.backgroundColor = 'black';
};
