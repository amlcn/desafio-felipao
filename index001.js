//Desafio #02 - Calculadora de Partidas Rankeadas
let vitorias = "200"
let derrotas = "20"
const saldoVitorias = vitorias - derrotas
const rank = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

let message = "O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível de "

if (saldoVitorias >= 1 && saldoVitorias < 10){
    console.log(message + rank[0])
}

    else if (saldoVitorias >=11 && saldoVitorias < 20){
    console.log(message + rank[1])
    }

    else if (saldoVitorias >= 21 && saldoVitorias < 50){
    console.log(message + rank[2])
    }

    else if (saldoVitorias >= 51 && saldoVitorias < 80){
    console.log(message + rank[3])
    }

    else if (saldoVitorias >= 81 && saldoVitorias < 90){
    console.log(message + rank[4])
    }

    else if (saldoVitorias >= 91 && saldoVitorias < 100){
    console.log(message + rank[5])
    }

    else if (saldoVitorias >=101){
    console.log(message + rank[6])
    }