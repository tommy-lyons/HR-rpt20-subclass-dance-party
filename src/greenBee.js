var GreenDancer = function (top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img src="./img/greenBee.png" class = "dancer fade">');
  this.setPosition(top, left);
  this.lineUp = function () {
  var position = {
      top: $("body").height() * .62,
      left: $("body").width() * .465
    };
    this.$node.css(position);
  };
};

GreenDancer.prototype = Object.create(MakeDancer.prototype);
GreenDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};
GreenDancer.prototype.constructor = MakeBlinkyDancer;