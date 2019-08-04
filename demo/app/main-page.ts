import {
  TabReselectedEventData,
  TabSelectedEventData,
  TabPressedEventData,
} from 'nativescript-bottom-navigation';

export const tabSelected = (args: TabSelectedEventData) => {
  console.log('tab selected:', args.newIndex);
};

export const tabReselected = (args: TabReselectedEventData) => {
  console.log('tab reselected:', args.index);
  alert('tab reselected');
};

export const tabPressed = (args: TabPressedEventData) => {
  console.log('tab pressed:', args.index);
  alert(
    'This tab has isSelectable: false, and should be used to perform actions.',
  );
};
