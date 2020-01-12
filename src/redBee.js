var RedDancer = function (top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.color = 'red';
  this.$node = $('<img src="./img/redBee.png" class = "dancer fade">');
  this.setPosition(top, left);
  this.lineUp = function (spot) {
    var spot = spot || .62;
    var position = {
      top: $("body").height() * spot,
      left: $("body").width() * .125
    };
    this.$node.css(position);
  };

};

RedDancer.prototype = Object.create(MakeDancer.prototype);
RedDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  // this.$node.toggle();
};
RedDancer.prototype.constructor = MakeBlinkyDancer;







