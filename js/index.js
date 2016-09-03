// Set loader timeout
$(document).ready(function() {

  setTimeout(function() {
    $('body').addClass('open');
  }, 1000);

    $('body').addClass('open');


});

// Fun facts!
var num = 0;
var fact;
var visible = 'is-visible';
var btnFacts = $('.btn__facts');
var blockFacts = $('.block__facts');
var blockFactsInner = '.content';

// Show a random fact when clicked
btnFacts.on('click', function(e) {
  e.preventDefault();

  $(this).toggleClass(visible);
  blockFacts.toggleClass(visible);

  if(num < 8 && !blockFacts.hasClass(visible)) {
    // Next!
    num++;
  } else if(num < 8 && blockFacts.hasClass(visible)) {
    // Hold please
  }
    else {
    // Start it over
    num = 0;
  }
  console.log(num);

  // Just the facts.
  switch(num) {
    case 0:
      fact = "I put a bunch of random things about me in here. Close and open for more juicy details.";
      break;
    case 1:
      fact = "I spend lots of free time writing music. I want all the synthesizers and drum machines.";
      break;
    case 2:
      fact = "I'm originally from New Jersey. People think I say things like 'water' and 'coffee' weird.";
      break;
    case 3:
      fact = "I always keep a frozen pizza on the premises.";
      break;
    case 4:
      fact = "I want to become a master chef. Or at least a decent one.";
      break;
    case 5:
      fact = "I debate running off to Barcelona. If I'm gone for a good chunk of time, you know where to start looking.";
      break;
    case 6:
      fact = "...now you know too much...";
      break;
    case 7:
      fact = "Let's just start over.";
      break;
  }

  blockFacts.find(blockFactsInner).text(fact);

});
