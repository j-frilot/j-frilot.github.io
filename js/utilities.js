

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

let projects = [{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300/v1609287683/portfolio/work-rockpaperscissors.jpg",
  title: "Rock, Paper, Scissors",
  link: "https://j-frilot.github.io/Rock-Paper-Scissor",
  code: "https://github.com/j-frilot/Rock-Paper-Scissor",
}, 
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300/v1609448795/portfolio/work-sixteen_g1kdfd.jpg",
  title: "Clothing Commerce Store",
  link: "https://sixteen-commerce.netlify.app/",
  code: "https://github.com/j-frilot/Commerce-Store",
}, 
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300/v1609288913/portfolio/work-random-quote.jpg",
  title: "Random Quote Maker",
  link: "https://j-frilot.github.io/Random-Quote-Generator-/",
  code: "https://github.com/j-frilot/Random-Quote-Generator-",
}, 
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300/v1609288802/portfolio/work-groupme.jpg",
  title: "GroupMe Mobile App",
  link: "https://j-frilot.github.io/GroupMe/",
  code: "https://github.com/j-frilot/GroupMe",
}, 
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300/v1609289011/portfolio/work-pinterest.jpg",
  title: "Pinterest Clone",
  link: "https://j-frilot.github.io/Pinterest-Clone/",
  code: "https://github.com/j-frilot/Pinterest-Clone",
}, 
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_300/v1609291170/portfolio/work-restaurant.jpg",
  title: "Restaurant Landing Page",
  link: "https://codepen.io/TheMelloMan/pen/PozPNjq",
  code: "https://codepen.io/TheMelloMan/pen/PozPNjq",
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