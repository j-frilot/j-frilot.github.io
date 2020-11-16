

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

