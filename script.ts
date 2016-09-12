function rgbToHex(r:number, g:number, b:number){
    let rStr: string = r.toString(16).toUpperCase()
    rStr = rStr.toUpperCase()
    if (rStr.length==1){
        rStr = "0"+rStr
    }
    let gStr: string = g.toString(16).toUpperCase()
    if (gStr.length==1){
        gStr = "0"+gStr
    }
    let bStr: string = b.toString(16).toUpperCase()
    if (bStr.length==1){
        bStr = "0"+bStr
    }
    let hexCode: string = "#"+rStr+gStr+bStr
    return hexCode
}
function updateHex(type:string){

    let r: number = parseInt((<HTMLInputElement>document.getElementById(type+"Red")).value)
    let g: number = parseInt((<HTMLInputElement>document.getElementById(type+"Green")).value)
    let b: number = parseInt((<HTMLInputElement>document.getElementById(type+"Blue")).value)

    let colour: string = rgbToHex(r,g,b)
    document.getElementById(type+"Hex").innerHTML = "Hex: "+colour
    
    if (type == "header"){
        document.getElementById("headerBody").style.backgroundColor = colour
    } else if (type == "background"){
        document.body.style.background = colour
    } else if (type == "font"){
        var fontElements
        for (var j = 1; j<=6; j++){
            fontElements = document.getElementsByTagName("h"+j.toString())
            for(var i = 0; i < fontElements.length; i++) {
                fontElements[i].style.color = colour
            }
        }
        fontElements = document.getElementsByTagName("p")
        for(var i = 0; i < fontElements.length; i++) {
            fontElements[i].style.color = colour
        }
    } else if (type == "link"){
        var linkElements = document.getElementsByTagName("a")
        for(var i = 0; i < linkElements.length; i++) {
            linkElements[i].style.color = colour
        }
    } 

    localStorage.setItem("r",r.toString())
    localStorage.setItem("g",g.toString())
    localStorage.setItem("b",b.toString())
}

function setColours(header: Array<number>, background: Array<number>, font: Array<number>, link: Array<number>){
    (<HTMLInputElement>document.getElementById("headerRed")).value = header[0].toString();
    (<HTMLInputElement>document.getElementById("headerGreen")).value = header[1].toString();
    (<HTMLInputElement>document.getElementById("headerBlue")).value = header[2].toString();
    updateHex('header');

    (<HTMLInputElement>document.getElementById("backgroundRed")).value = background[0].toString();
    (<HTMLInputElement>document.getElementById("backgroundGreen")).value = background[1].toString();
    (<HTMLInputElement>document.getElementById("backgroundBlue")).value = background[2].toString();
    updateHex('background');

    (<HTMLInputElement>document.getElementById("fontRed")).value = font[0].toString();
    (<HTMLInputElement>document.getElementById("fontGreen")).value = font[1].toString();
    (<HTMLInputElement>document.getElementById("fontBlue")).value = font[2].toString();
    updateHex('font');

    (<HTMLInputElement>document.getElementById("linkRed")).value = link[0].toString();
    (<HTMLInputElement>document.getElementById("linkGreen")).value = link[1].toString();
    (<HTMLInputElement>document.getElementById("linkBlue")).value = link[2].toString();
    updateHex('link');
}