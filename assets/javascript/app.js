$(document).ready(function () {
  $("#crystal-set").click(function () {
    // $(this).hide();
    // $(this).val = randomIntFromInterval(1, 12);

    //  KEEP THIS CODE!!
    // let value1 = $('#crystal_one').data('num');
    // console.log(value1);

    let crysVal = $(this).attr('crystals');
    switch (crysVal) {
      case 'crystal_one':
        value1 = $('#crystal_one');
        console.log(value1);
        break;
      case 'crystal_two':
        value1 = $('#crystal_one');
        console.log(value1);
        break;
      default:
        break;
    }
  });

  let crystalValues = [12, 34, 45, 67];
  let yourScore = 0;
  let randomGameNumber;
  let wins = 0;
  let losses = 0;

  function init() {
    yourScore = 0;

    randomNum();
    $.each(crystalValues, function (index, value) {
      crystalValues[index] = randomIntFromInterval(1, 12);
    });
  };

  //  ONLY USEFUL WITH CLICK EVENTS?????????
  function randomNum() {
    randomGameNumber = randomIntFromInterval(19, 120);
    $("#randomNumDiv").text(randomGameNumber);
  };

  $("#gameStart").click(function () {
    init();
    $(this).hide();
    updateScore();
    // $("#crystal_one").on("click", crystalFunc);
    // $("#crystal_two").on("click", crystalFunc)
    // $("#crystal_three").on("click", crystalFunc)
    $(".crystals").on("click", crystalFunc);
  });

  function updateScore() {
    $("#scoreupdate").text(yourScore);
  };

  // $("#crystal_one").on("click", crystalFunc);

  // Main function...
  function crystalFunc() {
    let i;
    // $('.crystals').on('click', function () {
    i = $(this).data('num');
    console.log(`This is your data num: ${i}!`);
    // });

    console.log(`Crystal ${i + 1}, is selected!  Your value is ${crystalValues[i]}`);
    yourScore += crystalValues[i];
    updateScore();
    // Check if you've lost...
    if (yourScore > randomGameNumber) {
      $(".crystals").off("click", crystalFunc);
      $('#gameStart').text(`You've Loss!  Sorry :(
        'Your score was over, ${randomGameNumber}!!
        Please, Click to try again!`);
      // console.log(randomGameNumber);
      $('#gameStart').show();
      losses++;
      $('#win_loss').html(`
        Your wins: ${wins}
        <br>
          <br> Your losses: ${losses}
    <br>`);
      yourScore = 0;
    }

    //  Check if you've won...
    else if (yourScore === randomGameNumber) {
      $(".crystals").off("click", crystalFunc);
      $('#gameStart').text(`You've Won!!!  Your score matches ${randomGameNumber}!!
      Please, Click Me to restart!!`);
      $('#gameStart').show();
      wins++;
      $('#win_loss').html(`
        Your wins: ${wins}
        <br>
          <br> Your losses: ${losses}
    <br>`);
      yourScore = 0;
    }
  };
});


// $("#crystal_two").click(function () {
// console.log("Crystal two is selected!" + 'Your value is ' + crystalValues[1]);
//   yourScore += crystalValues[1];
//   updateScore();
// });

// $(document).ready(function () {
//   $("#crystal_three").click(function () {
//     console.log("Crystal three is selected!" + 'Your value is ' + crystalValues[2]);
//   });
// });

// $(document).ready(function () {
//   $("#crystal_four").click(function () {
//     console.log("Crystal four is selected!" + 'Your value is ' + crystalValues[3]);
//   });
// });

// $("<p>Test</p>").insertAfter(".standard");


// generate a random # between 19 & 120
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(randomIntFromInterval(19, 120));
// console.log(randomIntFromInterval(1, 12));
