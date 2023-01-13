$("#correo").click(function () {
  alert("correo ha sido enviado");
});
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
$(document).ready(function () {
  $("#").click(function () {
    var gato = this.hash
    $("html, body").animated(
      {
        scrollTop: $(gato).offset().top
      },
      3000
    )
  })
})

$(window).scroll(function () {
  if ($("#menu").offset().top > 150) {
    $("#menu").addClass("bg-inverse");
  } else {
    $("#menu").removeClass("bg-inverse");
  }
});
$(document).ready(function(){
     $("#card-1").click(function(){
       $("p1").toggle(1000);
         })});
          $(document).ready(function(){
            $("#card-2").click(function(){
              $("p2").toggle(1000);
                })})
                  $(document).ready(function(){
                    $("#card-3").click(function(){
                      $("p3").toggle(1000);
                        })});
                        $(document).ready(function(){
                          $("#card-4").click(function(){
                           $("p4").toggle(1000);
                             })});
