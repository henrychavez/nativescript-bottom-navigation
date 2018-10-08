exports.pageLoaded = function (args) {
};

let bar;

let tabSelected = function (args) {
  console.log('tab selected ' + args.newIndex);
}

let tabPressed = function (args) {
  alert('This item has selectable: false, and should be used to perform actions');
}

exports.loaded = function (args) {
  bar = args.object;
  bar.on('tabSelected', tabSelected);
  bar.on('tabPressed', tabPressed);
}

exports.changeBackground = () => {
  bar.backgroundColor = 'black';
}
