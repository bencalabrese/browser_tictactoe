var View = function (game, $el) {
  this.game = game;
  this.$el = $el;
};

View.prototype.bindEvents = function () {
};

View.prototype.makeMove = function ($square) {
};

View.prototype.setupBoard = function () {
  var $grid = $("<ul></ul>");
  $grid.addClass("grid");
  $grid.addClass("group");
  this.$el.append($grid);

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var $listItem = $("<li></li>");
      $listItem.attr("data-pos", [i,j]);
      $listItem.addClass("square");
      $grid.append($listItem);
    }
  }
};

module.exports = View;
