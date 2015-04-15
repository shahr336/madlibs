$(function(){
    
    function dayClick() {
        var name= $("#name").val();
        $(".name").html(name);
        
        var adj= $("#adj").val();
        $(" .adj").html(adj);
        
        var body= $("#body").val();
        $(".body").html(body);
        
        var insect= $("#insect").val();
        $(".insect").html(insect);
        
        var verb= $("#verb").val();
        $(".verb").html(verb);
          
        $("#result").fadeIn();
               
}

        $("#result").hide();
        $("#dayCTA").click(dayClick);

});



