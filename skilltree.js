$(document).ready(function(){
var lvl;
var statPoints;
$("#level").keyup(function(e){
    if(e.keyCode === 13){
        lvl = $("#level").val();
        statPoints = lvl;
        var max = $("#level")[0].max;
        
        if(lvl> max){
            $("#level").val(50);
            lvl = 50
        }
        if(lvl){

            $("#statPoints>span").text(`${lvl}/${lvl}`);
            $("#skillPoints>span").text(`${lvl}/${lvl}`);
        }
        if(!lvl) {
            $("#statPoints>span").text("0/0");
            $("#skillPoints>span").text("0/0");
        }
    }
});
$(".statInc").click(function(e){    
    console.log( statPoints);

    var target = e.target;
    var input = $(target).parent().find("input");
    var statValue = $(input).val();
    $(input).val(++statValue);
    statPoints--;
    if(statPoints < 1){
        alert();
        e.preventDefault();
    }
    
})

});