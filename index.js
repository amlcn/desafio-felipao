const nomeHeroi = "MestredoPythinho"
let pontosDeExp = 12000
let rankHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if (pontosDeExp < 1000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[0])
}
    else if (pontosDeExp >= 1001 && pontosDeExp <= 2000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[1])
}
    else if (pontosDeExp >= 2001 && pontosDeExp <= 5000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[2])
}
    else if (pontosDeExp >= 6001 && pontosDeExp <= 7000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[3])
}
    else if (pontosDeExp >= 7001 && pontosDeExp <= 8000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[4])
}
    else if (pontosDeExp >= 8001 && pontosDeExp <= 9000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[5])
}
    else if (pontosDeExp >= 9001 && pontosDeExp <= 10000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[6])
}
    else if (pontosDeExp > 10000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[7])
}
