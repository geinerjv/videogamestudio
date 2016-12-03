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
    
    var perro = $( window ).width()
    if(perro >= 651){
        alert("Yeah");
    }
}); 

