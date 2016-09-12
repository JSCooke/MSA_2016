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
    if (type == "font") {
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
