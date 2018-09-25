exports.pageLoaded = function (args) {
};

let bar;

let tabSelected = function (args) {
  if (args.newIndex === 1) {
    alert('This item has selectable: false, and should be used to perform actions');
  }
  console.log('tab selected ' + args.newIndex);
}

exports.loaded = function (args) {
  bar = args.object;
  bar.on('tabSelected', tabSelected);
}

exports.changeBackground = () => {
  bar.backgroundColor = 'black';
}