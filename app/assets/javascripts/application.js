
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded fired");
    $('.ui.dropdown').dropdown();
  });


  const scroll_bottom = function(){
    if($('#messages').length > 0){
        $('#messages').scrollTop($('messages')[0].scrollHeight);
    }
 }
 
$(document).on('turbo:load', function() {
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
})

sumbit_message = function(){
    $('#message_body').on('keydown', function(e){
        if(e.keyCode == 13){
            $('button').click();
            e .target.value = ""
        }
    });
};

// add auto scroll to bottom in messages
$(document).on('turbo:load', function() {
  if ($('#messages').length > 0) {
  $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
  submit_message();
  scroll_bottom();
});



// document.addEventListener("turbo:load", function () {
//     console.log("test")
//     $('.ui.dropdown').dropdown();
//   });
  
// $(document).on('turbolinks:load', function(){
//     console.log("Dropdown initializer triggered");
//     $('.ui.dropdown').dropdown();
// });

