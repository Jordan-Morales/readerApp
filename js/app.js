

//jQuery
$ (() => {
  let themeSelected = "";
  let colorSelected;

// theme setter
let themeSetter = () => {
  $('#d4Toggle').attr("src", ("img/" + themeSelected + "d4.png"));
  $('#die4').attr("src", ("img/" + themeSelected + "d4.png"));

  $('#d6Toggle').attr("src", ("img/" + themeSelected + "d6.png"))
  $('#die6').attr("src", ("img/" + themeSelected + "d6.png"))

  $('#d8Toggle').attr("src", ("img/" + themeSelected + "d8.png"))
  $('#die8').attr("src", ("img/" + themeSelected + "d8.png"))

  $('#d10Toggle').attr("src", ("img/" + themeSelected + "d10.png"))
  $('#die10').attr("src", ("img/" + themeSelected + "d10.png"))

  $('#d12Toggle').attr("src", ("img/" + themeSelected + "d12.png"))
  $('#die12').attr("src", ("img/" + themeSelected + "d12.png"))

  $('#d20Toggle').attr("src", ("img/" + themeSelected + "d20.png"))
  $('#die20').attr("src", ("img/" + themeSelected + "d20.png"))

  $('.row').removeClass(themeSelected).removeClass('PrimaryTheme').removeClass('WoodTheme');
  $('.row').addClass(themeSelected + 'Theme');
  $('.toggleImg').removeClass(themeSelected).removeClass('PrimaryTheme').removeClass('WoodTheme');
  $('.toggleImg').addClass(themeSelected + 'Theme');

  if (themeSelected === 'Primary') {
    $('#label').removeClass("whiteText").addClass('blackText')
    $('.page').removeClass("Dark");
    $('.page').addClass("Light");
    $('html').removeClass("Dark");
    $('html').addClass("Light");
  } else if (themeSelected === "Wood") {
    $('#label').removeClass("blackText").addClass('whiteText')
    $('.page').removeClass("Light");
    $('.page').addClass("Dark");
    $('html').removeClass("Light");
    $('html').addClass("Dark");
  } else {
    console.log('broken');
  }
}


// localStorage
if (localStorage && localStorage.getItem("themeSelected")) {
  themeSelected = localStorage.getItem("themeSelected");
  // console.log("This is local storage theme " + themeSelected);
  themeSetter();
} else if (localStorage){
  localStorage.setItem("themeSelected", "primary");
  themeSetter();
} else {
  // Sorry! No Web Storage support..
  // console.log("Local storage not working.");
  themeSelected = "primary"
  themeSetter();
}

// theme changer
$('#themeSelector').on('click', () => {
  themeSelected = $("#themes option:selected").val();
  localStorage.setItem("themeSelected", themeSelected);
  themeSetter();
})


// changing theme needs to do the following
// toggleImg buttonDie need to change src="img/primary/*" -> src="img/wood/*"


// hide all die rows
  $('.dieFourRow').hide();
  $('.dieSixRow').hide();
  $('.dieEightRow').hide();
  $('.dieTenRow').hide();
  $('.dieTwelveRow').hide();
  $('.dieTwentyRow').hide();

// establish toggle display of dieRow
  $('#d4Toggle').on('click', () => {
    $('.dieFourRow').toggle()
  })
  $('#d6Toggle').on('click', () => {
    $('.dieSixRow').toggle()
  })
  $('#d8Toggle').on('click', () => {
    $('.dieEightRow').toggle()
  })
  $('#d10Toggle').on('click', () => {
    $('.dieTenRow').toggle()
  })
  $('#d12Toggle').on('click', () => {
    $('.dieTwelveRow').toggle()
  })
  $('#d20Toggle').on('click', () => {
    $('.dieTwentyRow').toggle()
  })

// add die set to get total number
  getSum = (total, num) => {
    return total + Math.round(num);
  }

    // 4 Sided Die
    generateRandomFour = () => {
        return Math.floor((Math.random() * 4) + 1)
      }

    $('#die4').on('click', () => {
      let repeater = $('#dieFourInput').val();
      let resultFourArray = [];

      // replace self to allow for new spin
      let el = $('#die4');
      let newone = el.clone(true);
      el.replaceWith(newone);
      // add spin class
      $('#die4').addClass('buttonDieSpin').one('webkitAnimationEnd...', function(){$(this).removeClass('buttonDieSpin')});


        for (let x = 0; x < repeater; x++) {
            let dieFour = generateRandomFour();
            resultFourArray.push(dieFour);
            let listItem = $('<li>' + dieFour + '</li>')
            $('#dieFourResultLog').prepend(listItem)
        }
        $('#dieFourResultLog').prepend('<li>-</li>');
        let resultFour = resultFourArray.reduce(getSum, 0);
        $('#resultFour').text(resultFour);
    })

    // 6 Sided Die
    generateRandomSix = () => {
        return Math.floor((Math.random() * 6) + 1)
      }

    $('#die6').on('click', () => {
      let repeater = $('#dieSixInput').val();
      let resultSixArray = [];

      // replace self to allow for new spin
      let el = $('#die6');
      let newone = el.clone(true);
      el.replaceWith(newone);
      // add spin class
      $('#die6').addClass('buttonDieSpin').one('webkitAnimationEnd...', function(){$(this).removeClass('buttonDieSpin')});

        for (let x = 0; x < repeater; x++) {
            let dieSix = generateRandomSix();
            resultSixArray.push(dieSix);
            let listItem = $('<li>' + dieSix + '</li>')
            $('#dieSixResultLog').prepend(listItem)
        }
        $('#dieSixResultLog').prepend('<li>-</li>');
        let resultSix = resultSixArray.reduce(getSum, 0);
        $('#resultSix').text(resultSix);
    })

    // 8 Sided Die
    generateRandomEight = () => {
        return Math.floor((Math.random() * 8) + 1)
      }

    $('#die8').on('click', () => {
      let repeater = $('#dieEightInput').val();
      let resultEightArray = [];

      // replace self to allow for new spin
      let el = $('#die8');
      let newone = el.clone(true);
      el.replaceWith(newone);
      // add spin class
      $('#die8').addClass('buttonDieSpin').one('webkitAnimationEnd...', function(){$(this).removeClass('buttonDieSpin')});

        for (let x = 0; x < repeater; x++) {
            let dieEight = generateRandomEight();
            resultEightArray.push(dieEight);
            let listItem = $('<li>' + dieEight + '</li>')
            $('#dieEightResultLog').prepend(listItem)
        }
        $('#dieEightResultLog').prepend('<li>-</li>');
        let resultEight = resultEightArray.reduce(getSum, 0);
        $('#resultEight').text(resultEight);
    })

    // 8 Sided Die
    generateRandomTen = () => {
        return Math.floor((Math.random() * 10) + 1)
      }

    $('#die10').on('click', () => {
      let repeater = $('#dieTenInput').val();
      let resultTenArray = [];

      // replace self to allow for new spin
      let el = $('#die10');
      let newone = el.clone(true);
      el.replaceWith(newone);
      // add spin class
      $('#die10').addClass('buttonDieSpin').one('webkitAnimationEnd...', function(){$(this).removeClass('buttonDieSpin')});

        for (let x = 0; x < repeater; x++) {
            let dieTen = generateRandomTen();
            resultTenArray.push(dieTen);
            let listItem = $('<li>' + dieTen + '</li>')
            $('#dieTenResultLog').prepend(listItem)
        }
        $('#dieTenResultLog').prepend('<li>-</li>');
        let resultTen = resultTenArray.reduce(getSum, 0);
        $('#resultTen').text(resultTen);
    })

    // 12 Sided Die
    generateRandomTwelve = () => {
        return Math.floor((Math.random() * 12) + 1)
      }

    $('#die12').on('click', () => {
      let repeater = $('#dieTwelveInput').val();
      let resultTwelveArray = [];

      // replace self to allow for new spin
      let el = $('#die12');
      let newone = el.clone(true);
      el.replaceWith(newone);
      // add spin class
      $('#die12').addClass('buttonDieSpin').one('webkitAnimationEnd...', function(){$(this).removeClass('buttonDieSpin')});

        for (let x = 0; x < repeater; x++) {
            let dieTwelve = generateRandomTwelve();
            resultTwelveArray.push(dieTwelve);
            let listItem = $('<li>' + dieTwelve + '</li>')
            $('#dieTwelveResultLog').prepend(listItem)
        }
        $('#dieTwelveResultLog').prepend('<li>-</li>');
        let resultTwelve = resultTwelveArray.reduce(getSum, 0);
        $('#resultTwelve').text(resultTwelve);
    })

    // 20 Sided Die
    generateRandomTwenty = () => {
        return Math.floor((Math.random() * 20) + 1)
      }

    $('#die20').on('click', () => {
      let repeater = $('#dieTwentyInput').val();
      let resultTwentyArray = [];

      // replace self to allow for new spin
      let el = $('#die20');
      let newone = el.clone(true);
      el.replaceWith(newone);
      // add spin class
      $('#die20').addClass('buttonDieSpin').one('webkitAnimationEnd...', function(){$(this).removeClass('buttonDieSpin')});

        for (let x = 0; x < repeater; x++) {
            let dieTwenty = generateRandomTwenty();
            resultTwentyArray.push(dieTwenty);
            let listItem = $('<li>' + dieTwenty + '</li>')
            $('#dieTwentyResultLog').prepend(listItem);
        }
        $('#dieTwentyResultLog').prepend('<li>-</li>');
        let resultTwenty = resultTwentyArray.reduce(getSum, 0);
        $('#resultTwenty').text(resultTwenty);

    })

  });
