var GreenDancer = function (top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.color = 'green';
  this.$node = $('<img src="./img/greenBee.png" class = "dancer blinking">');
  this.setPosition(top, left);
  this.lineUp = function (spot) {
    var spot = spot || .62;
    var position = {
      top: $("body").height() * spot,
      left: $("body").width() * .465
    };
    this.$node.css(position);
  };
};

GreenDancer.prototype = Object.create(MakeDancer.prototype);
GreenDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  if (this.$node.hasClass('blinking')) {
    this.$node.toggle();
  }
};

GreenDancer.prototype.constructor = MakeBlinkyDancer;