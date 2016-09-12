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
function updateHeaderHex(){

    let r: number = parseInt((<HTMLInputElement>document.getElementById("headerRed")).value)
    let g: number = parseInt((<HTMLInputElement>document.getElementById("headerGreen")).value)
    let b: number = parseInt((<HTMLInputElement>document.getElementById("headerBlue")).value)

    document.getElementById("headerHex").innerHTML = "Hex: "+rgbToHex(r,g,b)
    
    localStorage.setItem("r",r.toString())
    localStorage.setItem("g",g.toString())
    localStorage.setItem("b",b.toString())
}