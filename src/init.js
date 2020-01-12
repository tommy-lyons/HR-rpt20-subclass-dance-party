$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addRed').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    //added
    $('body').append(dancer.$node);
    $(".fade").hover(function() {
      $(this).hide();
    });
    window.dancers.push(dancer);
  });

  $('.addGreen').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addBlue').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUp').on('click', function(event) {
    var redCounter = .62;
    var greenCounter = .62;
    var blueCounter = .62;
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].color === 'red') {
        window.dancers[i].lineUp(redCounter);
        redCounter += .05;
      }
      if (window.dancers[i].color === 'blue') {
        window.dancers[i].lineUp(blueCounter);
        blueCounter += .05;
      }
      if (window.dancers[i].color === 'green') {
        window.dancers[i].lineUp(greenCounter);
        greenCounter += .05;
      }
    }
  });

  $('.swarm').on('click', function(event) {
    // on clicking swarm, we want to iterate over the bees array, and reassign them to
    // a randomly generated position near the center of the window

    // need to adjust the position of each element to be slightly different in some way
    var height = $(window).height() / 4;
    var width = $(window).width() / 4;
    console.log(height, width);
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].swarm();
    }
  });

});


