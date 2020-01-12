var BlueDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img src="./img/blueBee.png" class = "dancer fade">');
  this.setPosition(top, left);
  this.lineUp = function () {
    var position = {
      top: $("body").height() * .62,
      left: $("body").width() * .8
    };
    this.$node.css(position);
  };
};

BlueDancer.prototype = Object.create(MakeDancer.prototype);
BlueDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};
BlueDancer.prototype.constructor = MakeBlinkyDancer;