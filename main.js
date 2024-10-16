//Loader
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
setTimeout(function() {
    document.querySelector(".loader").style.display = 'none';
    document.querySelector(".header") .style.display = 'flex';
}, 3000);

//Navbar
function showsidebar(){
    const sidebar = document.querySelector("#sidebar");
    sidebar.style.display="flex";
}

function hidesidebar(){
    const sidebar = document.querySelector("#sidebar");
    sidebar.style.display="none";
}

//CountUp
$(".number").counterUp({time:3000});

$(document).ready(function() {
  $('button').on('click', function() {
      const category = $(this).data('category');

      if (category === 'all') {
          $('.item').show();
      } else {
          $('.item').hide();
          $('.item[data-category="' + category + '"]').show();
      }
  });
});
