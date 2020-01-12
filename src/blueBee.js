var BlueDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.color = 'blue';
  this.$node = $('<img src="./img/blueBee.png" class = "dancer spinning">');
  this.setPosition(top, left);
  this.lineUp = function (spot) {
    var spot = spot || .62;
    var position = {
      top: $("body").height() * spot,
      left: $("body").width() * .8
    };
    this.$node.css(position);
  };
};

BlueDancer.prototype = Object.create(MakeDancer.prototype);
BlueDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // deleted the toggle functionality here because we made the spin instead
  // this.$node.toggle();
};
BlueDancer.prototype.constructor = MakeBlinkyDancer;