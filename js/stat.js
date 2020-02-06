'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var COLUMN_GAP = 50;
var TEXT_HEIGHT = 16;
var startPointY = 90;
var barHeight = BAR_HEIGHT - TEXT_HEIGHT * 2;

var getRandomColor = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return ('hsl(240, ' + (Math.floor(Math.random() * (max - min)) + min) + '%,' + ' 50%)');
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 35);
  ctx.fillText('Список результатов:', 120, 55);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP + (BAR_WIDTH + COLUMN_GAP) * i, startPointY + barHeight - ((times[i] * barHeight) / maxTime));
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor(1, 100);
    }
    ctx.fillRect(CLOUD_X + COLUMN_GAP + (BAR_WIDTH + COLUMN_GAP) * i, startPointY + TEXT_HEIGHT + GAP + barHeight - ((times[i] * barHeight) / maxTime), BAR_WIDTH, (times[i] * barHeight) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + (BAR_WIDTH + COLUMN_GAP) * i, startPointY + TEXT_HEIGHT + GAP + barHeight + GAP);
  }
};
