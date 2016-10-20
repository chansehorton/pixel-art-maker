'use strict';

window.onload = function() {
  var currentColor = 'white';
  var pixelTable = document.querySelector(".pixel_table");
  var colorTable = document.querySelector(".color_table");
  var colorArray = ['#FF355E','#FD5B78','#FF6037','#FF9966','#FF9933','#FFCC33','#FFFF66','#FFFF66','#CCFF00','#66FF66','#AAF0D1','#50BFE6','#FF6EFF','#FF6EFF','#EE34D2','#FF00CC'];


  colorTable.addEventListener('click', setColor, false);
  pixelTable.addEventListener('click', changeColor, false);

  populatePixels(40,100);

  function changeColor(e) {
    if (e.target !== e.currentTarget) {
      var clickedItem = e.target;
      clickedItem.style.backgroundColor = currentColor;
    };
    e.stopPropagation();
  }

  function setColor(e) {
    if (e.target !== e.currentTarget) {
      var clickedItem = e.target;
      currentColor = window.getComputedStyle(clickedItem).getPropertyValue('background-color');
    };
    e.stopPropagation();
  }

  function populatePixels(rows, columns) {
    for (var i=0;i<=rows;i++) {
      var newRow = document.createElement('div');
      newRow.className = 'row';
      pixelTable.appendChild(newRow);

      for (var j=0;j<=columns;j++) {
        var newPixel = document.createElement('span');
        newPixel.className = 'pixel';
        newRow.appendChild(newPixel);
      }
    }
  }

  function populateColorTable(colors) {
    for (var i=0;i<)
  }
};
