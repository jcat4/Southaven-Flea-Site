var isMobile = isMobileTest.any();

$(document).ready(function() {
  if (!isMobile) {
    $("#main-body").append("<p>You'e on a computer</p>");
  } else {
    $("#main-body").append("<p>You'e on a mobile device</p>");
  }
});