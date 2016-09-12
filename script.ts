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
    
    if (type == "font"){
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