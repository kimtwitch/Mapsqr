//map info
var maptitle = "My New Map";
var mapsize_x = 400;
var mapsize_y = 300;
    
//map search onDataReceived
function onDataReceived(data) {
    "use strict";
    
    console.log(data);
}

 $(document).ready(function () {
    "use strict";
    $(".mapboxgl-ctrl-geocoder").hide();
    $("div[id*='_btns'] >div").hide();
    
    //tabs
    $('#maptool_tabs li:not(:last-child)').click(function () {
        var dest = $(this).attr("id");
        dest = "#tool_" + dest.slice(4);
        $('#maptool_tabs').find("li.current_tab").removeClass("current_tab");
        $(this).addClass("current_tab");
        $("#tool_contents").find(".current_tool").removeClass("current_tool");
        $("#tool_contents").find(dest).addClass("current_tool");
        
        //map geocode
        if (dest !== "#tool_destinations") {
            $(".mapboxgl-ctrl-geocoder").hide();
            $("div[id*='_btns'] >div").hide();
            if (dest === "#tool_transportation") {
                $("div[id=top_btns] >div").show();
            } else if (dest === "#tool_mapstyle") {
                $("div[id=bottom_btns] >div").show();
            }
        } else {
            $(".mapboxgl-ctrl-geocoder").show();
            $("div[id*='_btns'] >div").hide();
            $("#btn_movetool").show();
        }
    });
    
    //map destination search
    
    //Map info change
    $("#maptitle").focusout(function () {
        if ($(this).val().length === 0) {
            maptitle = "My New Map";
        } else {
            maptitle = $(this).val();
        }
        
        var mapfilename = maptitle.replace(/\s+/g, '-').toLowerCase() + ".png";
        
        $("#savepng").attr("download", mapfilename);
    });
    $("#mapsize_x").focusout(function () {
        var neww = $(this).val(),
            newwpx = neww + "px";
        $("#map").css("width", newwpx);
        $("#map canvas").attr("width", neww);
        $("#map canvas").css("width", newwpx);
        $(".mapcontainer #top_btns").css("width", newwpx);
        $(".mapcontainer #bottom_btns").css("width", newwpx);
    });
    $("#mapsize_y").focusout(function () {
        var newh = $(this).val(),
            newhpx = newh + "px";
        $("#map").css("height", newhpx);
        $("#map canvas").attr("height", newh);
        $("#map canvas").css("height", newhpx);
        $(".mapcontainer #top_btns").css("padding-bottom", newhpx);
        $(".mapcontainer #bottom_btns").css("padding-top", newhpx);
    });
    
    //save map
    $("#savepng").click(function () {
        /*html2canvas(document.body, {
            onrendered: function (canvas) {
                var imgurl = canvas.toDataURL("image/png");
                document.getElementById("savepng").href = imgurl;
            }
        });*/
        var mapasimg = document.getElementsByTagName("canvas"),
            imgurl = mapasimg[0].toDataURL("image/png");
        document.getElementById("savepng").href = imgurl;
    });
});