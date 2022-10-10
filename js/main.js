window.onload = function () {
    var southWest = L.latLng(30, 87),
        northEast = L.latLng(26, 87),
        bounds = L.latLngBounds(southWest, northEast);

    //initialize map
    var map = L.map('base', { center: [39.0, -93.3], maxBounds: bounds, minZoom: 7, maxZoom: 13, zoom: 8 });

    //basemap definitions
    L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', { maxZoom: 17, minZoom: 3 }).addTo(map);
    L.control.scale().addTo(map);

    //initialize variables displayed
    var stu = "student04"; var sch = "stuSch04"; var cloro = "D01"; var circle = "PT"; var year = "04"; var schFill = "PT04";
    var breaks = C01; var Cbreaks = CPT;
    var previousZoom = 8; var currentZoom = 8;

    $("#admin").val("County Level");

    //select menu
    $(function () {
        $("#var2").selectmenu({
            change: function (event, ui) {
                cloro = $("#var2").val(); //change cloropleth value
                layerHandler();
                if (cloro == "D02" || cloro == "D03" || cloro == "D05" || cloro == "D06" || cloro == "D07" || cloro == "D08" || cloro == "D09") {
                    $("#leg1").val("Less than " + (Math.round(breaks[1] * 1000) / 10) + "%");
                    $("#leg7").val((Math.round((breaks[6] + .001) * 1000) / 10) + " % or more");
                    for (var i = 2; i < 7; i++) {
                        $("#leg" + String(i)).val((Math.round((breaks[i - 1] + .001) * 1000) / 10) + " - " + (Math.round(breaks[i] * 1000) / 10) + "%");
                    }
                }
               

            }
        }).selectmenu("menuWidget")
            .addClass("overflow");
        $("var1").selectmenu({
            change: function (event, ui) {
                circle = $("#var1").val(); // change circle marker value
                layerHandler();
                $("leg00").value("No Data");
                if (Cbreaks == CwhStu || Cbreaks == ChiStu || Cbreaks == CblStu || Cbreaks == ThiStu || Cbreaks == TblStu || Cbreaks == TwhStu || Cbreaks == Tlunch) {
                    $("#leg11").val("Less than " + (Math.round(Cbreaks[1] * 1000) / 10) + "%");
                    $("#leg17").val((Math.round((Cbreaks[6] + .001) * 1000) / 10) + " % or more");
                    for (var i = 2; i < 7; i++) {
                        $("#leg1" + String(i)).val((Math.round((Cbreaks[i - 1] + .001) * 1000) / 10) + " - " + (Math.round((Cbreaks[i] * 1000) / 10)) + "%");
                    }
                }
                
    
            }
        }).selectmenu("menuWidget")
            .addClass("overflow");

        for (var i = 2; i < 7; i++) {
            $("#leg" + String(i)).val((Math.round((breaks[i - 1] + .001) * 1000) / 1000) + " - " + breaks[i]);
        }
        for (var i = 2; i < 7; i++) {
            $("#leg1" + String(i)).val((Math.round((Cbreaks[i - 1] + .001) * 1000) / 1000) + " - " + Cbreaks[i]);
        }
        $("#leg1").val("Less than " + breaks[1]);
        $("#leg11").val("Less than " + Cbreaks[1]);
        $("#leg7").val((Math.round((breaks[6] + .001) * 1000) / 1000) + " or more");
        $("#leg17").val((Math.round((Cbreaks[6] + .001) * 1000) / 1000) + " or more");

    });
}

