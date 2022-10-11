window.onload = function () {
    var southWest = L.latLng(37, -96.3),
        northEast = L.latLng(40.8, -90.3),
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
        //for first rectangular legend 
        for (var i = 2; i < 7; i++) {
            $("#leg" + String(i)).val((Math.round((breaks[i - 1] + .001) * 1000) / 1000) + " - " + breaks[i]);
        }
        //for second circular legend
        for (var i = 2; i < 7; i++) {
            $("#leg1" + String(i)).val((Math.round((Cbreaks[i - 1] + .001) * 1000) / 1000) + " - " + Cbreaks[i]);
        }
        //for less than rectangular last legend
        $("#leg1").val("Less than " + breaks[1]);
        $("#leg11").val("Less than " + Cbreaks[1]);  //for less than circular last legend
        $("#leg7").val((Math.round((breaks[6] + .001) * 1000) / 1000) + " or more");  //for or more rectangular last legend
        $("#leg17").val((Math.round((Cbreaks[6] + .001) * 1000) / 1000) + " or more"); //for or more circular last legend

    });
    var Ctext = ["Percent White Students", "Percent Black Students", "Percent Hispanic Students"];
    var Cmenu = ["whStu", "blStu", "hiStu"];
    var Dtext = ["Percent Students Receiving Reduced or Free Lunch (KS only)", "Drop-out Rate (KS only)", "State Assessment Reading Score (KS only)", "State Assessment Math Score (KS only)", "Average Teacher Salary (KS only)", "Percent Expenditures towards Teacher Salary", "Private Monetary Contributions", "Total Revenue per Student", "Local Revenue per Student", "State Revenue per Student", "Federal Revenue per Student", "Student/Staff Ratio"];
    var Dmenu = ["lunch", "drop", "read", "math", "salary", "pSalary", "priv", "tRev", "lRev", "sRev", "fRev", "PS"];
    var Ttext = ["Percent White Students", "Percent Black Students", "Percent Hispanic Students", "Percent Students Receiving Reduced or Free Lunch"];
    var Tmenu = ["whStu", "blStu", "hiStu", "lunch"];

    function menuHandler(list, text) {
        $("#var1 option").each(function (index, option) {
            $(option).remove();
        });
        var options = [];
        options.push("<option value='PT' selected = 'selected'>Student/Teachers Ratio</options>");  //default option displayed
        for (i = 0; i < list.length; i++) {
            options.push("<option value='" + list[i] + "'>" + text[i] + "</options>");
        }
        $('#var1').append(options.join("")).selectmenu("refresh");
    }

  
    
    function getColor1(d) {
        return d < breaks[0] ? 'rgba(255,255,255,0)':
                d < breaks[1]	? '#cbe7e1' :
                d < breaks[2]	? '#aed0c8' :
                d < breaks[3]	? '#89bdb1' :
                d < breaks[4]	? '#6ba396' :
                d < breaks[5]	? '#4f877a' :
                d < breaks[6]	? '#3e7265' :
                                '#265c4f' ;
    }

//define style of cloropleth
function style(feature) {	
    return {
        fillColor: getColor1(feature.properties[cloro]),
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
}

    //initialize layers
    //var a = L.geoJson(tract).addTo(map);
    //var b = L.geoJson(school).addTo(map);
    //var c = L.geoJson(district, { style: style }).addTo(map);
    var d = L.geoJson(county, { style: style }).addTo(map);
    //var e = L.geoJson(district2).addTo(map);
    //menuHandler(Cmenu, Ctext);
}

