var View = function (game, $el) {
  this.game = game;
  this.$el = $el;
};

View.prototype.bindEvents = function () {
  var self = this;
  $(".square").on("click", function(event) {
    self.makeMove($(event.currentTarget));
  });
};

View.prototype.makeMove = function ($square) {
  var textPos = $square.attr("data-pos");
  var pos = textPos.split(",").map(function(el) {
    return parseInt(el);
  });
  this.game.playMove(pos);

  var mark = this.game.board.grid[pos[0]][pos[1]];
  var $currentSquare = $(".square[data-pos='" + textPos + "']");
  $currentSquare.addClass(mark);

  if (this.game.isOver()) {
    $(".square").addClass("loser");
    $("." + this.game.winner()).removeClass("loser");
    $("." + this.game.winner()).addClass("winner");
  }

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
