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
                
                
            }
        }).selectmenu("menuWidget")
            .addClass("overflow");
    });
}

