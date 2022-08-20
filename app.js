var mainText = document.getElementById('myInput');
const twoDigit = ["70", "71", "80", "81", "90"]
var btn = document.getElementById("validate");
const airtel = ["701", "708", "802", "808", "812", "901", "902", "904", "907", "+234701", "+234708", "+234802", "+234808", "+234812", "+234901", "+234902", "+234904", "+234907"];
const glo = ["705", "805", "811", "815", "807", "905", "+234705", "+234805", "+234811", "+234815", "+234807", "+234905"];
const mtn = ["703", "704", "706", "803", "806", "813", "814", "816", "810", "903", "906", "+234703", "+234704", "+234706", "+234803", "+234806", "+234813", "+234814", "+234816", "+234810", "+234903", "+234906"];
const mobile = ["809", "817", "818", "908", "909", "+234809", "+234817", "+234818", "+234908", "+234909"]
const nigerianCode = "+234";
mainText.addEventListener('input', service);
function service() {
  var text = mainText.value;
  if ((text[0] == '0') && (text.length > 3)) {
    var mainNum = text[1].concat(text[2], text[3]);
    let secondThird = text[1].concat(text[2]);
    if (twoDigit.includes(secondThird)) {
      if ((text.length > 11) || (text.length < 11)) {
        document.getElementById('suggestions').innerText = 'Please enter the correct number';
        document.getElementById('tel-image').src = "error.png";
        btn.disabled = true;
      }
      else {
        if (mtn.includes(mainNum)) {
          btn.disabled = false;
          document.getElementById('tel-image').src = './images/logos/mtn.png';
          document.getElementById('suggestions').innerText = 'Mtn Number - Good to go';
        }
        else {
          btn.disabled = true;
          document.getElementById('suggestions').innerText = 'Not a valid Mtn Number';
        }
      }
    }
    else {
      document.getElementById('suggestions').innerText = 'Invalid Number Format';
    }
  }
  else if ((text[0] == '+') && (text.length > 6)) {
    var firstfourDigit = text[0].concat(text[1], text[2], text[3]);
    if (firstfourDigit == nigerianCode) {
      var mainNum = text[4].concat(text[5], text[6]);
      let secondThird = text[4].concat(text[5])
      if (twoDigit.includes(secondThird)) {
        if ((text.length > 14) || (text.length < 14)) {
        document.getElementById('suggestions').innerText = 'Please enter the correct number';
        document.getElementById('tel-image').src = "error.png";
        btn.disabled = true;
        }
        else {
          if (mtn.includes(mainNum)) {
          btn.disabled = false;
          document.getElementById('tel-image').src = './images/logos/mtn.png';
          document.getElementById('suggestions').innerText = 'Mtn Number - Good to go';
          }
          else {
          btn.disabled = true;
          document.getElementById('suggestions').innerText = 'Not a valid Mtn Number';
          }
        }
      }
      else {
        document.getElementById('tel-image').src = "error.png";
        document.getElementById('suggestions').innerText = 'Invalid Number Format';
      }
    }
    else {
      document.getElementById('tel-image').src = "error.png";
      document.getElementById('suggestions').innerText = 'Invalid Country Code';
    }
  }
  else {
    document.getElementById('suggestions').innerText = 'Invalid Number Format';
  }
  if (airtel.includes(mainNum)) {
    document.querySelector('.airtel').classList.add('active');
    document.querySelector('.glo').classList.remove('active');
    document.querySelector('.mtn').classList.remove('active');
    document.querySelector('.mobile').classList.remove('active');
  }
  else if (glo.includes(mainNum)) {
    document.querySelector('.glo').classList.add('active');
    document.querySelector('.airtel').classList.remove('active');
    document.querySelector('.mtn').classList.remove('active');
    document.querySelector('.mobile').classList.remove('active');
  }
  else if (mtn.includes(mainNum)) {
    document.querySelector('.mtn').classList.add('active');
    document.querySelector('.glo').classList.remove('active');
    document.querySelector('.airtel').classList.remove('active');
    document.querySelector('.mobile').classList.remove('active');
  }
  else if (mobile.includes(mainNum)) {
    document.querySelector('.mobile').classList.add('active');
    document.querySelector('.glo').classList.remove('active');
    document.querySelector('.mtn').classList.remove('active');
    document.querySelector('.airtel').classList.remove('active');
  }
  else {
    document.querySelector('.mobile').classList.remove('active');
    document.querySelector('.glo').classList.remove('active');
    document.querySelector('.mtn').classList.remove('active');
    document.querySelector('.airtel').classList.remove('active');
  }
}

