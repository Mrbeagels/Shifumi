// Je declare mes variables et demande le nom du joueur humain 
const buttons = document.querySelectorAll("button");
const username = prompt("Veuillez indiquer votre nom d'utilisateur...");
var userScoreDisplay = document.getElementById('userScore');
var botScoreDisplay = document.getElementById('botScore');
var userWin = 0;
var botWin = 0;


// Ici je recupere le choix du joueurs humain au click sur un bouton et je donne une valeur random au bot avec Math.floor et math.random

for (let i = 0; i < buttons.length; i++){
buttons[i].addEventListener("click", function() {
    var joueur = buttons[i].innerHTML;
    var robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    var resultat;

    // Logique entiere du jeu
    if (joueur === robot){
        resultat = "Vous avez fait une egalité !";
    } 
    else if((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille")){
        resultat = " Bazinga ! Vous avez gagné !!";
        userWin++;
    } 
    else {
        resultat = "Bamboozled ! Vous avez perdu !";
        botWin++;
    }


    document.querySelector(".resultat").innerHTML = `
    ${username} a choisi : ${joueur}</br>
    Le robot a choisi : ${robot}</br>
    ${resultat}
    `;
    userScoreDisplay.innerHTML=userWin;
    botScoreDisplay.innerHTML=botWin;
})
}