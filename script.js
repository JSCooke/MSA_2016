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
function updateTime() {
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            receiveTime(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", "https://api.xmltime.com/timeservice?accesskey=Nji55keaWx&expires=2016-09-12T23%3A27%3A21%2B00%3A00&signature=sY29oFc4mOjSzWzKXKL%2BUrXpPtE%3D&version=2&varname=output&placeid=16&radius=10", true);
    xmlhttp.send();
}
function receiveTime(responseText) {
    var response = JSON.parse(responseText);
}
