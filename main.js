//Loader
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

setTimeout(function () {
  document.querySelector(".loader").style.display = 'none';
  document.querySelector(".header").style.display = 'flex';
}, 3000);

//Navbar
function showsidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.style.display = "flex";
}

function hidesidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.style.display = "none";
}


var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});


//CountUp
$(document).ready(function () {
  // $(".number").counterUp({ time: 3000 });



  $('.filter').on('click', function () {
    const category = $(this).data('category');

    if (category === 'all') {
      $('.item').show();
    } else {
      $('.item').hide();
      $('.item[data-category="' + category + '"]').show();
    }
  });
});
