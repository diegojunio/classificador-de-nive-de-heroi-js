var pegaXpDoHeroi = document.getElementById("xp-heroi");
var pegaNomeDoHeroi = document.getElementById("nome-heroi");
var mensagemHeroi = document.querySelector("#mensagem-heroi");
var botaoRegistraHeroi = document.getElementById("verifica-nivel");

class Heroi {
    nome;
    xp;

    retornaNivelHeroi(){
        if(this.xp < 1000)
            return "Ferro";

        if(this.xp > 1000 && this.xp <= 2000)
            return "Bronze";

        if(this.xp > 2000 && this.xp <= 5000)
            return "Prata";

        if(this.xp > 5000 && this.xp <= 7000)
            return "Ouro";

        if(this.xp > 7000 && this.xp <= 8000)
            return "Platina";

        if(this.xp > 8000 && this.xp <= 9000)
            return "Ascendente";

        if(this.xp > 9000 && this.xp <= 10000)
            return "Imortal";

        if(this.xp > 10000)
            return "Radiante";
    }
}
const heroi = new Heroi();

botaoRegistraHeroi.addEventListener("click", () => {
    heroi.nome = pegaNomeDoHeroi.value;
    heroi.xp = pegaXpDoHeroi.value;
    mensagemHeroi.textContent = `O Herói ${heroi.nome} está no nível de ${heroi.retornaNivelHeroi()}.`;
});

