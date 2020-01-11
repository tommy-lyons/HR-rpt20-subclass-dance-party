var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = this.step;

  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };

  //return blinkyDancer;
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   //SUBCLASS
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
//   //DONT THINK WE CAN DO THIS BECAUSE THIS WILL REFER TO THE THIS IN THE SUPERCLASS

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = this.step;

//   this.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     this.$node.toggle();
//   };



//   //return blinkyDancer;
// };
// makeBlinkyDancer.prototype = Object.create(makeDancer);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;