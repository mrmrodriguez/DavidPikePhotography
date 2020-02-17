$(document).ready(function(){
  $('.scroll-down').css('display', 'none');
  $('.scroll-down').fadeIn(2000);
});

// Get the modal
var modal = document.getElementById('disModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
$('.myImg').click(function(){
  modal.style.display = "block";
  var newSrc = this.src;
  modalImg.attr('src', newSrc);
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

$('#disModal').on('shown.bs.modal', function () {
  var width = $(window).width();  
  if(width < 480){
      $(this).hide(); 
  }
});
