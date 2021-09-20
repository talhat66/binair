function KeerOm (input2: string) {
    omgekeerd = ""
    for (let waarde of input2) {
        omgekeerd = "" + waarde + omgekeerd
    }
    return omgekeerd
}
input.onButtonPressed(Button.A, function () {
    binair = "" + binair + "1"
})
function converteer (binairgetal: string) {
    totaal = 0
    for (let index = 0; index <= binairgetal.length - 1; index++) {
        let binairgetal = ""
        totaal = totaal + 2 ** (index + parseFloat(binairgetal.charAt(index)))
    }
    return totaal
}
input.onButtonPressed(Button.AB, function () {
    OmgekeerdeTekst = KeerOm(binair)
    converteer(OmgekeerdeTekst)
})
input.onButtonPressed(Button.B, function () {
    binair = "" + binair + "0"
})
let OmgekeerdeTekst = ""
let totaal = 0
let omgekeerd = ""
let binair = ""
binair = ""
