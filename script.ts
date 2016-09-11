function rgbToHex(r:number, g:number, b:number){
    let rStr: string = r.toString(16)
    if (rStr.length==1){
        rStr = "0"+rStr
    }
    let gStr: string = g.toString(16)
    if (gStr.length==1){
        gStr = "0"+gStr
    }
    let bStr: string = b.toString(16)
    if (bStr.length==1){
        bStr = "0"+bStr
    }
    let hexCode: string = "#"+rStr+gStr+bStr
    return hexCode
}