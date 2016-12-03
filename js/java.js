$(document).ready(function(){
  $( "#btn-menu" ).click(function() {
      $("#btn-menu").hide();  
      $("#btn-menu-esconder").show();
      $("#nav").slideDown();
  });
    
    $("#btn-menu-esconder").click(function(){
        $("#btn-menu").show(); 
        $("#btn-menu-esconder").hide();
        $("#nav").slideUp();
    });
}); 

