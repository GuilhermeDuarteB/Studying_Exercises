var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12 && hora > 6){
    console.log("Bom Dia!")
} else if (hora >= 12 && hora < 20){
    console.log("Boa tarde")
} if (hora >= 20){
    console.log("Boa noite")
} if (hora > 0 && hora <= 6){
    console.log("Boa Madrugada")
}