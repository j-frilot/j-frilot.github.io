///////////// dropdown MENU///////
document.addEventListener("DOMContentLoaded", function () {
  var drop = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(drop, {});
});

// /////////  TOOL TIP  ///////////

document.addEventListener("DOMContentLoaded", function () {
  var tool = document.querySelectorAll(".tooltipped");
  var instances = M.Tooltip.init(tool, {});
});

///////////// WORK GALLARY BLOW UPS///////////////////
document.addEventListener('DOMContentLoaded', function() {
  var image = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(image, {});
});

