// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  this.time = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  //return dancer;
};

// MakeDancer.prototype.constructor = MakeDancer;

MakeDancer.prototype.step = function() {
  var context = this;
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // debugger;
  setTimeout(function() { context.step(); }, this.time);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.swarm = function (shift) {
  var position = {
    top: (($(window).height() / 2) + (shift * 10)),
    left: (($(window).width() / 2) + (shift * 10))
  };

  this.$node.css(position);
  this.$node.removeClass('blinking');
  this.$node.addClass('orbit');
};