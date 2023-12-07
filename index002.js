class Hero {
    constructor(nome, idade, tipo, dano) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.dano = dano;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
        case 'mage':
            ataque = 'magia';
            break;
        case 'warrior':
            ataque = 'espada';
            break;
        case 'monk':
            ataque = 'artes marciais';
            break;
        case 'ninja':
            ataque = 'shuriken';
            break;
        default:
            ataque = 'atacou'
        }
    console.log(`O ${this.tipo} chamado ${this.nome} atacou usando ${ataque} e causou ${this.dano} pontos de dano ao inimigo.`);
    }
}

const hero1 = new Hero ('Gandalf', 8000, 'mage', 1000000)
hero1.atacar();

const hero2 = new Hero ('Garrosh', 300, 'warrior', 800)
hero2.atacar();

const hero3 = new Hero ('Dogen', 80, 'monk', 999999)
hero3.atacar();

const hero4 = new Hero ('Danzo', 43, 'ninja', 100)
hero4.atacar();
