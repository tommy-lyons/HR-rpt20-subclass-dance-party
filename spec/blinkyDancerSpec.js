describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...not anymore since we changed our code
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

});


describe('RedBee', function() {
  var redBee;

  beforeEach(function() {
    redBee = new RedDancer();
  });

  it('should have a method named "line-up"', function() {
    expect(redBee.lineUp).to.be.a('function');
  });
  it('should have a property "color" with a value of "red"', function() {
    expect(redBee.color).to.equal('red');
  });
  it('should have a setPosition method', function() {
    expect(redBee.setPosition).to.be.a('function');
  });

});

describe('GreenBee', function() {
  var greenBee;

  beforeEach(function() {
    //clock = sinon.useFakeTimers();
    greenBee = new GreenDancer();
  });

  it('should have a method named "line-up"', function() {
    expect(greenBee.lineUp).to.be.a('function');
  });
  it('should have a property "color" with a value of "green"', function() {
    expect(greenBee.color).to.equal('green');
  });
  it('should have a setPosition method', function() {
    expect(greenBee.setPosition).to.be.a('function');
  });

});

describe('BlueDancer', function() {
  var blueBee;
  beforeEach(function() {
    //clock = sinon.useFakeTimers();
    blueBee = new BlueDancer();
  });

  it('should have a method named "line-up"', function() {
    expect(blueBee.lineUp).to.be.a('function');
  });
  it('should have a property "color" with a value of "blue"', function() {
    expect(blueBee.color).to.equal('blue');
  });
  it('should have a setPosition method', function() {
    expect(blueBee.setPosition).to.be.a('function');
  });

});






