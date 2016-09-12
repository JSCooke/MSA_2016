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
function updateHeaderHex() {
    var r = parseInt(document.getElementById("headerRed").value);
    var g = parseInt(document.getElementById("headerGreen").value);
    var b = parseInt(document.getElementById("headerBlue").value);
    document.getElementById("headerHex").innerHTML = "Hex: " + rgbToHex(r, g, b);
    localStorage.setItem("r", r.toString());
    localStorage.setItem("g", g.toString());
    localStorage.setItem("b", b.toString());
}
