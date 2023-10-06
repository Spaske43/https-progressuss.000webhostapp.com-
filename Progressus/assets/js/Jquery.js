$(document).ready(function()
{

        $("#ddlista ul").hide();
        $("#ddlista").click(function()
        {
            $(this).find("ul").stop().slideToggle();
       })


    $("#SkrivenoFF").hide();
    $("#SkrivenoH").hide();
    $("#SkrivenoHH").hide();
    $("#SkrivenoNR").hide();

    $(".pointer").hover(function()
    {
        $(this).css("cursor","pointer");
    })
    var brojacFF = 0;
    var brojacH = 0;
    var brojacHH = 0;
    var brojacNR = 0;

    $("#PrikaziViseFF").click(function(e)
    {
        brojacFF++
        e.preventDefault();
        $("#SkrivenoFF").slideToggle();
        if(brojacFF % 2 == 0)
        {
            $(this).html("show more");
        }else
        {
            $(this).html("show less" );  
        }
    })

    $("#PrikaziViseH").click(function(e)
    {
        brojacH++;  

        e.preventDefault();
        $("#SkrivenoH").slideToggle();
        if(brojacH % 2 == 0)
        {
            $(this).html("show more");
        }else
        {
            $(this).html("show less" );
        }
    })
    $("#PrikaziViseHH").click(function(e)
    {
        brojacHH++;
        e.preventDefault();
        $("#SkrivenoHH").slideToggle();
        if(brojacHH % 2 == 0)
        {
            $(this).html("show more");
        }else
        {
            $(this).html("show less" ); 
        }
    })
    $("#PrikaziViseNR").click(function(e)
    {
        brojacNR++;
        e.preventDefault();
        $("#SkrivenoNR").slideToggle();
        if(brojacNR % 2 == 0)
        {
            $(this).html("show more");
        }else
        {
            $(this).html("show less" ); 
        }
    })
   })
