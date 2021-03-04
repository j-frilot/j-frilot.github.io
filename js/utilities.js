

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

///////////  WORK DATABASE /////////


let projects = [
{
    img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto,w_411/v1614832437/portfolio/breezed-screenshot_ffenn8.png",
    title: "Breezed Portfolio",
    link: "https://kays-designs.netlify.app/",
    code: "https://github.com/j-frilot/Kay-Designs",
},    
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1609448795/portfolio/work-sixteen_g1kdfd.jpg",
  title: "Paws Pet Shop",
  link: "https://pawspetshop.netlify.app/",
  code: "https://github.com/j-frilot/Paws-Pet-Shop",
},
{
img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1609289011/portfolio/work-pinterest.jpg",
title: "Pinterest Clone",
link: "https://not-pinterest.netlify.app/",
code: "https://github.com/j-frilot/Pinterest-Clone",
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1611618803/math-game/thumbnail-phone.jpg",
  title: "Math Learning App",
  link: "https://schoolescape.netlify.app/",
  code: "https://github.com/j-frilot/math-game",
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1609287683/portfolio/work-rockpaperscissors.jpg",
  title: "Rock, Paper, Scissors",
  link: "https://j-frilot.github.io/Rock-Paper-Scissor",
  code: "https://github.com/j-frilot/Rock-Paper-Scissor",
}, 
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1609288913/portfolio/work-random-quote.jpg",
  title: "Random Quote Maker",
  link: "https://j-frilot.github.io/Random-Quote-Generator-/",
  code: "https://github.com/j-frilot/Random-Quote-Generator-",
}, 
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300,q_auto/v1609288802/portfolio/work-groupme.jpg",
  title: "GroupMe Mobile App",
  link: "https://j-frilot.github.io/GroupMe/",
  code: "https://github.com/j-frilot/GroupMe",
}, 
]



window.addEventListener('DOMContentLoaded', function(){
  let workSection = document.querySelector("#my-work");
  let displayWork = projects.map(function(project){

    return `<div>
              <img src=${project.img} class="responsive-img materialboxed gallary-item" width="1000">
              <p>${project.title}</p>
              <a href="${project.link}" target="blank">See Live</a> <a href="${project.code}" target="blank">See Code</a>
            </div>`
  })

  displayWork = displayWork.join("");
  workSection.innerHTML = displayWork;

});