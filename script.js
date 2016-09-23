/// <reference path="./google.maps.d.ts" />
function rgbToHex(r, g, b) {
    var rStr = r.toString(16).toUpperCase();
    rStr = rStr.toUpperCase();
    if (rStr.length == 1) {
        rStr = "0" + rStr;
    }
    var gStr = g.toString(16).toUpperCase();
    if (gStr.length == 1) {
        gStr = "0" + gStr;
    }
    var bStr = b.toString(16).toUpperCase();
    if (bStr.length == 1) {
        bStr = "0" + bStr;
    }
    var hexCode = "#" + rStr + gStr + bStr;
    return hexCode;
}
function updateHex(type) {
    var r = parseInt(document.getElementById(type + "Red").value);
    var g = parseInt(document.getElementById(type + "Green").value);
    var b = parseInt(document.getElementById(type + "Blue").value);
    var colour = rgbToHex(r, g, b);
    document.getElementById(type + "Hex").innerHTML = "Hex: " + colour;
    if (type == "header") {
        document.getElementById("headerBody").style.backgroundColor = colour;
    }
    else if (type == "background") {
        document.body.style.background = colour;
    }
    else if (type == "font") {
        var fontElements;
        for (var j = 1; j <= 6; j++) {
            fontElements = document.getElementsByTagName("h" + j.toString());
            for (var i = 0; i < fontElements.length; i++) {
                fontElements[i].style.color = colour;
            }
        }
        fontElements = document.getElementsByTagName("p");
        for (var i = 0; i < fontElements.length; i++) {
            fontElements[i].style.color = colour;
        }
    }
    else if (type == "link") {
        var linkElements = document.getElementsByTagName("a");
        for (var i = 0; i < linkElements.length; i++) {
            linkElements[i].style.color = colour;
        }
    }
    localStorage.setItem("r", r.toString());
    localStorage.setItem("g", g.toString());
    localStorage.setItem("b", b.toString());
}
function setColours(header, background, font, link) {
    document.getElementById("headerRed").value = header[0].toString();
    document.getElementById("headerGreen").value = header[1].toString();
    document.getElementById("headerBlue").value = header[2].toString();
    updateHex('header');
    document.getElementById("backgroundRed").value = background[0].toString();
    document.getElementById("backgroundGreen").value = background[1].toString();
    document.getElementById("backgroundBlue").value = background[2].toString();
    updateHex('background');
    document.getElementById("fontRed").value = font[0].toString();
    document.getElementById("fontGreen").value = font[1].toString();
    document.getElementById("fontBlue").value = font[2].toString();
    updateHex('font');
    document.getElementById("linkRed").value = link[0].toString();
    document.getElementById("linkGreen").value = link[1].toString();
    document.getElementById("linkBlue").value = link[2].toString();
    updateHex('link');
}
//Code from https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map
var map;
function initMap() {
    var startPoint = { lat: -25.363, lng: 131.044 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: startPoint
    });
    var marker = new google.maps.Marker({
        position: startPoint,
        map: map
    });
}
google.maps.event.addDomListener(window, "load", initMap);
function updateMap() {
    var lat = Number(document.getElementById("lat").value);
    var lon = Number(document.getElementById("lon").value);
    var point = { lat: lat, lng: lon };
    map.panTo(point);
}
